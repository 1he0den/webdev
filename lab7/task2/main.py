from models import Car, Motorcycle

if __name__ == "__main__":
    
    car1 = Car("Japan", "Toyota Camry", 2018, "Black")
    car2 = Car("Germany", "BMW M5", 2020, "Blue")
    motorcycle = Motorcycle("Italy", "Ducati", 2020, "Sport")

    vehicles = [car1, car2, motorcycle]

    for vehicle in vehicles:
        print(vehicle)
        if isinstance(vehicle, Car):
            print(vehicle.is_cool())
        elif isinstance(vehicle, Motorcycle):
            print(vehicle.is_cool())
        print()
