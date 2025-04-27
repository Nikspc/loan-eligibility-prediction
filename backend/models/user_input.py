from pydantic import BaseModel, Field

class UserInput(BaseModel):
    age: int = Field(..., gt=0, description="Age must be greater than 0")
    income: float = Field(..., gt=0, description="Income must be positive")
    employment_status: str
    credit_score: int = Field(..., ge=300, le=850, description="Credit score between 300 and 850")
    existing_loans: int = Field(..., ge=0, description="Existing loans must be non-negative")
