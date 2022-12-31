class Mammal:
    living = True
    
    def __init__(self, speak):
        self.speak = speak

    def speak_something(self):
        print("the creature speak: ", self.speak)

    def showcolor(self):
        print(self.color)

class Rabit(Mammal):
    def __init__(self, speak, color):
        super().__init__(speak)
        self.color = color

class Bat(Mammal):
    def __init__(self, speak, color):
        super().__init__(speak)
        self.color = color


rabit1 = Rabit("bunny", "white")
bat = Bat("squeakyy", "brown")

bat.showcolor()