"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``my_application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_my_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_app.settings')

my_app = get_asgi_my_application()
