from pydantic import BaseModel, ConfigDict, Field


class HealthResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    status: str = Field(default="ok")
    service: str = Field(default="vetvision-backend")
    environment: str
