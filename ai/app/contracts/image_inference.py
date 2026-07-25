from dataclasses import dataclass


@dataclass(frozen=True)
class ImageInferenceRequest:
    image_path: str
    model_name: str


@dataclass(frozen=True)
class ImageInferenceResult:
    model_name: str
    predicted_label: str
    confidence: float
