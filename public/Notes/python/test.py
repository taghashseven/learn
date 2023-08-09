

class Person: 
    
    #constructor 
    def __init__(self, name , age, gender): 
        if not name : 
            raise ValueError("Name is required")
        self.name = name.strip().lower().capitalize() 
        
        self.age = age
        if gender not in ['male', female]:
            raise ValueError('gender should be male or female')
        self.gender = gender 
    
    # overriding the __str__ method 
    def __str__(self): 
        return f"{self.name} is {self.age} years old"

    @property 
    def name(self): 
        return self._name
    
    @name.setter
    def name(self, value): 
        self._name = value.strip().lower().capitalize()


    # designe principle 
    @classmethod
    def getPerson(cls): 
        name = input('What is you name ')
        age = input('What is your age ')
        gender = input('What is you gender')
        return cls(name, age , gender)


# classmethod 

class Luck :

    gifts = ['car', 'house', 'money', 'job', 'love', 'health']

    @classmethod
    def get_gift(cls):
        return random.choice(cls.gifts)

