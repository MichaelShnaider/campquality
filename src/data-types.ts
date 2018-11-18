type CamperType = {
  first_name: string;
  last_name: string;
  img: string;
  checked_in: boolean;
  id: number;
  medication_given: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    bedtime: boolean;
  };
};
