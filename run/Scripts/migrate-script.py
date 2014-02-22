#!C:\Users\basti_000\code\py\run\run\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'sqlalchemy-migrate==0.8.2','console_scripts','migrate'
__requires__ = 'sqlalchemy-migrate==0.8.2'
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.exit(
        load_entry_point('sqlalchemy-migrate==0.8.2', 'console_scripts', 'migrate')()
    )
