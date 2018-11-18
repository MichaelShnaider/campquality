export const camperData = [
  {
    id: 0,
    checked_in: true,
    img: "http://www.joewigdahl.com/wp-content/uploads/MG_2407-906x640.jpg",
    first_name: "Joan",
    last_name: "Doe",
    gender: "Female",
    date_of_birth: "2018-05-02T00:00:00.000Z",
    medication_given: {
      breakfast: false,
      lunch: false,
      dinner: false,
      bedtime: false
    },
    height_cm: "164",
    weight_lbs: "100",
    allergies_dietary_restriction: {
      epinephrine_injector: false,
      anaphylaxis: "Anaphyatic reaction on Dec 10, 2017, mild",
      allergies: [
        {
          name: "Raspberries and blackberries ",
          addtional_information:
            "Vomiting,facial redness and swelling .Coughing and breathing trouble"
        },
        {
          name: "Dexamethasone",
          addtional_information: "Convulsions and vomiting "
        }
      ],
      dietary_restrictions: [
        {
          name: "chocolate",
          addtional_information: "get hives"
        }
      ]
    },
    medication_treatements: {
      medications: [
        {
          name: "Estrace",
          dose: ".25 mg",
          details: "Estrogen therapy",
          schedule: ["Bedtime"]
        },
        {
          name: "Cortef",
          dose: "7.5 / 5",
          details: "Adrenal insufficiency",
          schedule: ["Breakfast", "Dinner"]
        },
        {
          name: "Ddavp",
          dose: "25/50",
          details: "Diabetes insipidus",
          schedule: ["Breakfast", "Bedtime"]
        }
      ],
      medications_non_camp: [
        {
          name: "Estrace",
          details: "Estrogen therapy"
        },
        {
          name: "Cortef",
          details: "Adrenal insufficiency"
        }
      ],
      treatments: [
        {
          name: "Chemotherapy",
          details: "Once a week on Mondays"
        }
      ]
    },
    Immunizations: {
      vaccination: [
        {
          name: "Chicken Pox (Varicella)",
          vaccinated: true,
          date: "January 3, 2011"
        },
        {
          name: "Diptheria, Pertussis, Tetanus, Polio",
          vaccinated: true,
          date: "September 17, 2008"
        },
        {
          name: "Hepatitis B",
          vaccinated: true,
          date: "February 3, 2017"
        },
        {
          name: "IPV/OPV (Inactivated/Oral Polio",
          vaccinated: true,
          date: "June 21, 2005"
        },
        {
          name: "MMR (Measles-Mumps-Rubella)",
          vaccinated: true,
          date: "June 22, 2005"
        },
        {
          name: "MCV4 (Meningococcal Meningitis)",
          vaccinated: true,
          date: "January 25, 2005"
        }
      ],
      missing_immunization_details:
        "Second hepb booster is being done April 2018"
    },
    health_history: {
      conditions: [
        {
          name: "AIDS/HIV",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Autism Spectrum Disorder ",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Asthma/Inhaler",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Back Pain or Injury",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Headaches",
          experience_experienced: true,
          details:
            "Had headaches when tumour was active .Very occasionally gets headaches now mostly allergy sinus related."
        },
        {
          name: "Hearing Problems",
          experience_experienced: true,
          details: ""
        }
      ],
      other_mental_health_issues: {
        experience_experienced: true,
        details: ""
      },
      disease_history: [
        {
          name: "Cancer",
          experience_experienced: true,
          details: "Non germinoma germ cell tumour brain Jan 2013, Stomach 2015"
        },
        {
          name: "Is the child currently receiving chemotherapy or radiation?",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Brain Tumour",
          experience_experienced: true,
          details: "Jan 2013 chemo and radiation in remission since Oct 2013"
        },
        {
          name: "Chicken Pox (Varciella)",
          experience_experienced: false,
          details: "Had chicken pox in 2011"
        },
        {
          name: "Whooping Cough",
          experience_experienced: false,
          details: ""
        },
        {
          name:
            "Has your child been infected with an Antibiotic Resistant Organism (ARO)",
          experience_experienced: false,
          details: ""
        }
      ],
      operations: {
        operation_details:
          "4 x port removal and insertion Jan 2013 removed March 2014 and July 2015 removed 2016, Vp shunt  Jan 24 2013, Drainage tube application and removal June 29 2015 removed July 15  2015"
      },
      hospitalizations: "Chemotherapy and radiation",
      communicable_disease_3_months: "",
      activity_restrictions: "",
      special_assistance_required: "",
      discuss_with_medical: ""
    },
    doctor_information: {
      doctor: "John Smith",
      type: "oncologist",
      hospital: "Sick Kids"
    },
    health_insurance: {
      province: "Ontario",
      health_card: "SADCF34SDFV33SF",
      expiry: "June 5 2020"
    }
  },
  {
    id: 1,
    checked_in: false,
    img:
      "https://i.pinimg.com/736x/cf/7c/81/cf7c812bc5b094264a4a08e5f448005b--little-boy-haircuts-haircuts-for-kids.jpg",
    first_name: "John",
    last_name: "Doe",
    gender: "Male",
    date_of_birth: "2018-05-02T00:00:00.000Z",
    medication_given: {
      breakfast: false,
      lunch: false,
      dinner: false,
      bedtime: false
    },
    height_cm: "164",
    weight_lbs: "100",
    allergies_dietary_restriction: {
      epinephrine_injector: false,
      anaphylaxis: "Anaphyatic reaction on Dec 10, 2017, mild",
      allergies: [
        {
          name: "Raspberries and blackberries ",
          addtional_information:
            "Vomiting,facial redness and swelling .Coughing and breathing trouble"
        },
        {
          name: "Dexamethasone",
          addtional_information: "Convulsions and vomiting "
        }
      ],
      dietary_restrictions: [
        {
          name: "chocolate",
          addtional_information: "get hives"
        }
      ]
    },
    medication_treatements: {
      medications: [
        {
          name: "Estrace",
          dose: ".25 mg",
          details: "Estrogen therapy",
          schedule: ["Bedtime"]
        },
        {
          name: "Cortef",
          dose: "7.5 / 5",
          details: "Adrenal insufficiency",
          schedule: ["Breakfast", "Dinner"]
        },
        {
          name: "Ddavp",
          dose: "25/50",
          details: "Diabetes insipidus",
          schedule: ["Breakfast", "Bedtime"]
        }
      ],
      medications_non_camp: [
        {
          name: "Estrace",
          details: "Estrogen therapy"
        },
        {
          name: "Cortef",
          details: "Adrenal insufficiency"
        }
      ],
      treatments: [
        {
          name: "Chemotherapy",
          details: "Once a week on Mondays"
        }
      ]
    },
    Immunizations: {
      vaccination: [
        {
          name: "Chicken Pox (Varicella)",
          vaccinated: true,
          date: "January 3, 2011"
        },
        {
          name: "Diptheria, Pertussis, Tetanus, Polio",
          vaccinated: true,
          date: "September 17, 2008"
        },
        {
          name: "Hepatitis B",
          vaccinated: true,
          date: "February 3, 2017"
        },
        {
          name: "IPV/OPV (Inactivated/Oral Polio",
          vaccinated: true,
          date: "June 21, 2005"
        },
        {
          name: "MMR (Measles-Mumps-Rubella)",
          vaccinated: true,
          date: "June 22, 2005"
        },
        {
          name: "MCV4 (Meningococcal Meningitis)",
          vaccinated: true,
          date: "January 25, 2005"
        }
      ],
      missing_immunization_details:
        "Second hepb booster is being done April 2018"
    },
    health_history: {
      conditions: [
        {
          name: "AIDS/HIV",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Autism Spectrum Disorder ",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Asthma/Inhaler",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Back Pain or Injury",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Headaches",
          experience_experienced: true,
          details:
            "Had headaches when tumour was active .Very occasionally gets headaches now mostly allergy sinus related."
        },
        {
          name: "Hearing Problems",
          experience_experienced: true,
          details: ""
        }
      ],
      other_mental_health_issues: {
        experience_experienced: true,
        details: ""
      },
      disease_history: [
        {
          name: "Cancer",
          experience_experienced: true,
          details: "Non germinoma germ cell tumour brain Jan 2013, Stomach 2015"
        },
        {
          name: "Is the child currently receiving chemotherapy or radiation?",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Brain Tumour",
          experience_experienced: true,
          details: "Jan 2013 chemo and radiation in remission since Oct 2013"
        },
        {
          name: "Chicken Pox (Varciella)",
          experience_experienced: false,
          details: "Had chicken pox in 2011"
        },
        {
          name: "Whooping Cough",
          experience_experienced: false,
          details: ""
        },
        {
          name:
            "Has your child been infected with an Antibiotic Resistant Organism (ARO)",
          experience_experienced: false,
          details: ""
        }
      ],
      operations: {
        operation_details:
          "4 x port removal and insertion Jan 2013 removed March 2014 and July 2015 removed 2016, Vp shunt  Jan 24 2013, Drainage tube application and removal June 29 2015 removed July 15  2015"
      },
      hospitalizations: "Chemotherapy and radiation",
      communicable_disease_3_months: "",
      activity_restrictions: "",
      special_assistance_required: "",
      discuss_with_medical: ""
    },
    doctor_information: {
      doctor: "John Smith",
      type: "oncologist",
      hospital: "Sick Kids"
    },
    health_insurance: {
      province: "Ontario",
      health_card: "SADCF34SDFV33SF",
      expiry: "June 5 2020"
    }
  },
  {
    id: 2,
    checked_in: false,
    img: "https://ak3.picdn.net/shutterstock/videos/1359763/thumb/1.jpg",
    first_name: "Danny",
    last_name: "Boi",
    gender: "Male",
    date_of_birth: "2018-05-02T00:00:00.000Z",
    medication_given: {
      breakfast: true,
      lunch: false,
      dinner: false,
      bedtime: true
    },
    height_cm: "164",
    weight_lbs: "100",
    allergies_dietary_restriction: {
      epinephrine_injector: false,
      anaphylaxis: "Anaphyatic reaction on Dec 10, 2017, mild",
      allergies: [
        {
          name: "Raspberries and blackberries ",
          addtional_information:
            "Vomiting,facial redness and swelling .Coughing and breathing trouble"
        },
        {
          name: "Dexamethasone",
          addtional_information: "Convulsions and vomiting "
        }
      ],
      dietary_restrictions: [
        {
          name: "chocolate",
          addtional_information: "get hives"
        }
      ]
    },
    medication_treatements: {
      medications: [
        {
          name: "Estrace",
          dose: ".25 mg",
          details: "Estrogen therapy",
          schedule: ["Bedtime"]
        },
        {
          name: "Cortef",
          dose: "7.5 / 5",
          details: "Adrenal insufficiency",
          schedule: ["Breakfast", "Dinner"]
        },
        {
          name: "Ddavp",
          dose: "25/50",
          details: "Diabetes insipidus",
          schedule: ["Breakfast", "Bedtime"]
        }
      ],
      medications_non_camp: [
        {
          name: "Estrace",
          details: "Estrogen therapy"
        },
        {
          name: "Cortef",
          details: "Adrenal insufficiency"
        }
      ],
      treatments: [
        {
          name: "Chemotherapy",
          details: "Once a week on Mondays"
        }
      ]
    },
    Immunizations: {
      vaccination: [
        {
          name: "Chicken Pox (Varicella)",
          vaccinated: true,
          date: "January 3, 2011"
        },
        {
          name: "Diptheria, Pertussis, Tetanus, Polio",
          vaccinated: true,
          date: "September 17, 2008"
        },
        {
          name: "Hepatitis B",
          vaccinated: true,
          date: "February 3, 2017"
        },
        {
          name: "IPV/OPV (Inactivated/Oral Polio",
          vaccinated: true,
          date: "June 21, 2005"
        },
        {
          name: "MMR (Measles-Mumps-Rubella)",
          vaccinated: true,
          date: "June 22, 2005"
        },
        {
          name: "MCV4 (Meningococcal Meningitis)",
          vaccinated: true,
          date: "January 25, 2005"
        }
      ],
      missing_immunization_details:
        "Second hepb booster is being done April 2018"
    },
    health_history: {
      conditions: [
        {
          name: "AIDS/HIV",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Autism Spectrum Disorder ",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Asthma/Inhaler",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Back Pain or Injury",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Headaches",
          experience_experienced: true,
          details:
            "Had headaches when tumour was active .Very occasionally gets headaches now mostly allergy sinus related."
        },
        {
          name: "Hearing Problems",
          experience_experienced: true,
          details: ""
        }
      ],
      other_mental_health_issues: {
        experience_experienced: true,
        details: ""
      },
      disease_history: [
        {
          name: "Cancer",
          experience_experienced: true,
          details: "Non germinoma germ cell tumour brain Jan 2013, Stomach 2015"
        },
        {
          name: "Is the child currently receiving chemotherapy or radiation?",
          experience_experienced: false,
          details: ""
        },
        {
          name: "Brain Tumour",
          experience_experienced: true,
          details: "Jan 2013 chemo and radiation in remission since Oct 2013"
        },
        {
          name: "Chicken Pox (Varciella)",
          experience_experienced: false,
          details: "Had chicken pox in 2011"
        },
        {
          name: "Whooping Cough",
          experience_experienced: false,
          details: ""
        },
        {
          name:
            "Has your child been infected with an Antibiotic Resistant Organism (ARO)",
          experience_experienced: false,
          details: ""
        }
      ],
      operations: {
        operation_details:
          "4 x port removal and insertion Jan 2013 removed March 2014 and July 2015 removed 2016, Vp shunt  Jan 24 2013, Drainage tube application and removal June 29 2015 removed July 15  2015"
      },
      hospitalizations: "Chemotherapy and radiation",
      communicable_disease_3_months: "",
      activity_restrictions: "",
      special_assistance_required: "",
      discuss_with_medical: ""
    },
    doctor_information: {
      doctor: "John Smith",
      type: "oncologist",
      hospital: "Sick Kids"
    },
    health_insurance: {
      province: "Ontario",
      health_card: "SADCF34SDFV33SF",
      expiry: "June 5 2020"
    }
  }
];
