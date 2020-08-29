const template = {
    "form": {
      "form_title": "Contact Form",
      "form_description": "Please Enter Your Contact Details Very Carefully . if wrong contact then no selection"
    },
    "section": {
      "section_title": [
        "Contact Section",
        "Personal Info Section",
        "Resume Section"
      ],
      "section_description": [
        "In this Section Phone number and Mail Are there Please Fill these correctly",
        "In This Section Your Name  , Father Name , Mothers Name are there , Gender",
        "In this Section your CV , graduation Year |Month , Your Skills"
      ],
      "section_fields":[2,3,2]
    },
    "field": {
      "field_description": [
        "phone",
        "email",
        "Enter Name",
        "Fathers Name",
        "Gender",
        "CV",
        "Graduation Year | Month",
        "Tell About Your Skills ",
        "Duty Period"
      ],
      "field_label": [
        "phone",
        "email",
        "Name",
        "Fathers Name",
        "Gender",
        "CV",
        "Graduation Year | Month",
        "Skills",
        "Choose any one"
      ],
      "field_type_list": [
        {
          "field_type": "number",
          "index": 0,
          "options": []
        },
        {
          "field_type": "text",
          "index": 1,
          "options": []
        },
        {
          "field_type": "text",
          "index": 2,
          "options": []
        },
        {
          "field_type": "text",
          "index": 3,
          "options": []
        },
        {
          "field_type": "dropDown",
          "index": 4,
          "options": [
            "Male",
            "female",
            "others"
          ]
        },
        {
          "field_type": "fileUpload",
          "index": 5,
          "options": []
        },
        {
          "field_type": "datetime",
          "index": 6,
          "options": []
        },
        {
          "field_type": "multipleChoices",
          "index": 7,
          "options": ["c++","Java","python"]
        },
        {
          "field_type": "choice",
          "index": 8,
          "options": ["morning","night"]
  
        }
      ]
    }
  };

module.exports = template ;  