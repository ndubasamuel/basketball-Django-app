"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``my_application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_my_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_app.settings')

my_app = get_wsgi_my_application()
