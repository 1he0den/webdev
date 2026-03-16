class Vehicle:
    def __init__(self, country, model, year):
        self.country = country
        self.model = model
        self.year = year

    def get_age(self, current_year):
        return current_year - self.year

    def __eq__(self, other):
        if isinstance(other, Vehicle):
            return (
                self.model == other.model
                and self.year == other.year
                and self.country == other.country
            )
        return False

    def __str__(self):
        return f" Model: {self.model} \n Year: {self.year} \n Country: {self.country} \n "


class Car(Vehicle):
    def __init__(self, country, model, year, color):
        super().__init__(country, model, year)
        self.color = color

    def is_cool(self):
        if self.year >= 2010 and self.color.lower() in ["red", "blue", "black"]:
            return "This car is cool ngl😁🥶🫨"
        return "This car is not cool 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️"

    def __str__(self):
        return (
            f" Model: {self.model} \n Year: {self.year} \n Country: {self.country}"
            f" \n Color: {self.color} \n "
        )


class Motorcycle(Vehicle):
    def __init__(self, country, model, year, type):
        super().__init__(country, model, year)
        self.type = type

    def is_cool(self):
        if self.year >= 2015 and self.type.lower() in ["sport", "cruiser", "touring"]:
            return "This motorcycle is cool 👌👌🏍️"
        return "This motorcycle is not cool 😕"

    def __str__(self):
        return (
            f" Model: {self.model} \n Year: {self.year} \n Country: {self.country}"
            f" \n Type: {self.type} \n "
        )
