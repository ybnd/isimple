import os
import time
from distutils.util import strtobool
from functools import wraps, lru_cache
from typing import Any, Generator, Optional
from collections import namedtuple
import hashlib
import asyncio

import numpy as np

from isimple.core import get_logger

log = get_logger(__name__)


def str2bool(value: str) -> bool:
    return strtobool(value)


def as_string(value: Any) -> str:
    """Redirect `dbcore` calls to [`beets.util.as_string`](https://github.com/beetbox/beets/blob/545c65d903e38d37fd2c1734ec69eac609bea035/beets/util/__init__.py#L717-L733)
        Remove Python 2.7 compatibility
    """
    if value is None:
        return u''
    elif isinstance(value, memoryview):
        return bytes(value).decode('utf-8', 'ignore')
    elif isinstance(value, bytes):
        return value.decode('utf-8', 'ignore')
    else:
        return str(value)


def restrict(val, minval, maxval):
    """https://stackoverflow.com/questions/4092528
    """
    if val < minval:
        return minval
    if val > maxval:
        return maxval
    return val


def rotations(sequence) -> list:  # todo: clean up
    """Returns all rotations of a list.
    """

    def rotate(seq, n: int) -> list:
        return seq[n:] + seq[:n]

    rotation_list = []
    for N in range(len(sequence)):
        rotation_list.append(rotate(sequence, N))

    return rotation_list


Timing = namedtuple('Timing', ('t0', 't1', 'elapsed'))


def timed(f):
    """Function decorator to measure elapsed time.
    :param f: function
    """
    @wraps(f)
    def wrap(*args, **kwargs):
        ts = time.time()
        result = f(*args, **kwargs)
        te = time.time()
        log.info(f"{f.__name__}() --> {te-ts} s elapsed.")
        return result
    return wrap


class Timer(object):
    _t0: float
    _t1: float
    _parent: object
    _message: Optional[str]
    _elapsed: Optional[float]

    def __init__(self, parent: object):
        self._parent = parent
        self._elapsed = None

    def __enter__(self, message: Optional[str]):
        self._message = message
        self._t0 = time.time()
        log.debug(f"{self._parent.__class__.__name__}: "
                  f"timer started {message}")

    def __exit__(self):
        if hasattr(self, '_t0'):
            self._t1 = time.time()
            self._elapsed = self._t1 - self._t0
            log.debug(f"{self._parent.__class__.__name__}: "
                      f"{self._elapsed} s. elapsed {self._message}")

    @property
    def timing(self) -> Optional[tuple]:
        if all([hasattr(self, attr) for attr in ('_t0', '_t1', '_elapsed')]):
            return self._t0, self._t1, self._elapsed
        else:
            return None


def frame_number_iterator(total: int,
                          Nf: int = None,
                          dt: float = None, fps: float = None) \
        -> Generator[int, None, None]:
    if Nf is not None and (dt is None and fps is None):  # todo: a bit awkward, make two methods instead?
        Nf = min(Nf, total)
        for f in np.linspace(0, total, Nf):
            yield int(f)
    elif (dt is not None and fps is not None) and Nf is None:
        df = restrict(dt * fps, 1, total)
        for f in np.arange(0, total, df):
            yield int(f)
    else:
        ValueError()


def before_version(version_a, version_b):
    """Check whether `version_a` precedes `version_b`.
        Only handles numerics, i.e. no '1.25b.3v7'
    """
    return tuple(int(s) for s in version_a.split('.')) \
            < tuple(int(s) for s in version_b.split('.'))


def after_version(version_a, version_b):
    return not before_version(version_a, version_b)


@lru_cache(maxsize=256)
def hash_file(path: str = None, blocksize: int = 1024) -> Optional[str]:
    if not path is None:
        if os.path.isfile:
            m = hashlib.md5()
            with open(path, 'rb') as f:
                while True:
                    buf = f.read(blocksize)
                    if not buf:
                        break
                    m.update(buf)
            return m.hexdigest()
        else:
            return None
    else:
        return None
