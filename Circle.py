import math


class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def calculate_circle_area(self):
        return math.pi * self.radius**2
    
circle = Circle(radius = float(1.2))

area=circle.calculate_circle_area()

print(area)