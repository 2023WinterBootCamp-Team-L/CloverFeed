# authentication.py

from rest_framework.authentication import SessionAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # 이전에 수행되던 csrf 확인을 수행하지 않도록 함
