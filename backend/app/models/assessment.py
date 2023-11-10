from pydantic import BaseModel
from typing import Optional,List


class FamilyMember(BaseModel):
    """
    Pydantic model for representing family member details.

    Attributes:
        name (str): The name of the family member.
        age (int): The age of the family member.
        occupation (str): The occupation of the family member.
        history_of_hearing_loss (str): Whether the family member has a history of hearing loss.
    """
    name: str
    age: int
    occupation: str
    history_of_hearing_loss: str

class Assessments(BaseModel):
    """
    Pydantic model for representing assessment details.

    Attributes:
        # Personal Information
        email (str): The email address of the individual.
        filling_str (str): A string identifier for the assessment.
        fullname (str): The full name of the individual.
        dob (str): The date of birth of the individual.
        gender (str): The gender of the individual.
        ...

        # Family Members
        family_members (List[FamilyMember]): List of family members.

        # Medical History
        history_of_hearing_loss (str): Whether there is a history of hearing loss.
        elobrate_history (Optional[str]): Elaborate details on the hearing loss history.
        medical_history (Optional[str]): Medical history of the individual.
        ...

        # Development Milestones
        attended_school (str): Whether the individual attended school.
        school_details (Optional[str]): Details about the school attended.
        school_cooperation (Optional[str]): Cooperation level with the school.
        ...

        # Additional Information
        main_concern (str): Main concern of the individual.
        expectations (str): Expectations for the assessment.
        additional_information (str): Additional information.
        filled_by (str): Name of the person filling the assessment.
        relationship_with_child (str): Relationship of the assessor with the individual.
    """
    email: str
    filling_str: str
    fullname : str
    dob: str
    gender: str
    caregiver_fullname: str
    mother_name: str
    father_name: str
    full_address: str
    mothers_phone: str
    fathers_phone: str
    mothers_email: Optional[str] = None
    fathers_email: Optional[str] = None
    mothers_occupation: str
    fathers_occupation: str
    parents_related: str
    elobrate_relation: Optional[str] = None
    referred_by: Optional[str] = None
    ent_name: Optional[str] = None
    ent_contace: Optional[str] = None
    audiologist_name: Optional[str] = None
    audiologist_contact: Optional[str] = None
    home_language: str

    family_members: List[FamilyMember] = []

    history_of_hearing_loss: str
    elobrate_history: Optional[str] = None
    medical_history: Optional[str] = None
    brief_about_hearing_loss: str
    str_of_loss_dignosed: str
    type_of_hearing_loss: str
    fitted_listining_device: Optional[str] = None
    details_cochlear: Optional[str] = None
    cochlear_model_name: Optional[str] = None
    cochlear_model_number: Optional[str] = None
    swithc_on_str_right: Optional[str] = None
    swithc_on_str_left: Optional[str] = None
    hearing_aid_name: Optional[str] = None
    hearing_aid_model_number: Optional[str] = None
    fitting_str_hearing_aid: Optional[str] = None

    pregnent_mother_health: str
    pregnent_mother_illness_or_medicatoin: str
    miscarriage_histroy: str
    delivery: str
    labour_duration: Optional[str] = None
    defficulty_during_labour: str
    
    if_premuture_details: str
    child_birth_weight: str
    immdiate_child_cry: str
    elobrate_child_cry: Optional[str] = None
    jaundice: str
    incubator_or_uv: str
    blood_transfusion: str
    duration_of_baby_in_hospital: float
    external_medication: Optional[str] = None
    development_histroy: Optional[str] = None
    external_illness: str
    child_crawl_age: Optional[int] = None
    child_situp_age: Optional[int] = None
    child_stand_walk_age: Optional[int] = None
    solid_foods_age: Optional[int] = None
    feeding_habits: Optional[str] = None
    feeding_on_own_age: Optional[int] = None
    eating_problems: Optional[str] = None
    dressing_age: Optional[int] = None
    bladder_bowel_control: Optional[str] = None
    physical_development: str
    coordination: str
    additional_issues: str
    development_milestones: str
    ophthalmologic_evaluation: str
    occupational_therapist_evaluation: str
    other_therapies: str
    therapies_details: Optional[str] = None

    attended_school: str
    school_details: Optional[str] = None
    school_cooperation: Optional[str] = None
    previous_therapy: Optional[str] = None
    main_concern: str
    expectations: str
    additional_information: str
    filled_by: str
    relationship_with_child: str
    