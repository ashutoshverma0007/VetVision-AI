from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    project_name: str = Field(default="VetVision AI API", alias="PROJECT_NAME")
    environment: str = Field(default="development", alias="ENVIRONMENT")
    api_v1_str: str = Field(default="/api/v1", alias="API_V1_STR")
    backend_host: str = Field(default="0.0.0.0", alias="BACKEND_HOST")
    backend_port: int = Field(default=8000, alias="BACKEND_PORT")
    database_url: str = Field(default="postgresql+psycopg://vetvision:vetvision@db:5432/vetvision", alias="DATABASE_URL")
    backend_cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:3000"], alias="BACKEND_CORS_ORIGINS")
    supabase_url: str = Field(default="", alias="SUPABASE_URL")
    supabase_anon_key: str = Field(default="", alias="SUPABASE_ANON_KEY")
    supabase_service_role_key: str = Field(default="", alias="SUPABASE_SERVICE_ROLE_KEY")

        @field_validator("backend_cors_origins", mode="before")
        @classmethod
        def parse_backend_cors_origins(cls, value: str | list[str]) -> list[str]:
            if isinstance(value, str):
                    return [item.strip() for item in value.split(",") if item.strip()]
            return value


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
