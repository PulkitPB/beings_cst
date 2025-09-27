from django.middleware.security import SecurityMiddleware

class CustomSecurityMiddleware(SecurityMiddleware):
    def process_response(self, request, response):
        response = super().process_response(request, response)
        response["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups"
        return response
