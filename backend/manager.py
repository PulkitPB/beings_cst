from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self,phone_number,password=None,email="",**extra_fields):
        if not phone_number:
            raise ValueError("Phone Number is Required.")
        print(email)
        email=self.normalize_email(email)
        print(email)
        user=self.model(phone_number=phone_number,email=email)
        user.set_password(password)
        user.save(using=self.db)

        return user
    
    def create_superuser(self,phone_number,password=None,email="",**extra_fields):
        extra_fields.setdefault('is_staff',True)
        # extra_fields.setdefault('is_admin',True)
        extra_fields.setdefault('is_superuser',True)
        extra_fields.setdefault('is_active',True)

        return self.create_user(phone_number,password,email,**extra_fields)