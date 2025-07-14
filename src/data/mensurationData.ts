export const mensurationData = {
  sections: [
    {
      id: "area-calculations",
      title: "Area Calculations",
      formulas: [
        {
          id: "rectangle-area",
          name: "Area of Rectangle",
          formula: "A = l \\times w",
          description: "Area equals length times width",
          example: "Rectangle with length 8m and width 5m: A = 8 × 5 = 40 m²"
        },
        {
          id: "triangle-area",
          name: "Area of Triangle",
          formula: "A = \\frac{1}{2} \\times b \\times h",
          description: "Area equals half the base times height",
          example: "Triangle with base 10cm and height 6cm: A = ½ × 10 × 6 = 30 cm²"
        },
        {
          id: "circle-area",
          name: "Area of Circle",
          formula: "A = \\pi r^2",
          description: "Area equals pi times radius squared",
          example: "Circle with radius 7cm: A = π × 7² = 49π ≈ 153.94 cm²"
        },
        {
          id: "trapezium-area",
          name: "Area of Trapezium",
          formula: "A = \\frac{1}{2}(a + b) \\times h",
          description: "Area equals half the sum of parallel sides times height",
          example: "Trapezium with parallel sides 8cm, 12cm and height 5cm: A = ½(8+12) × 5 = 50 cm²"
        }
      ]
    },
    {
      id: "volume-surface-area",
      title: "Volume & Surface Area",
      formulas: [
        {
          id: "cube-volume",
          name: "Volume of Cube",
          formula: "V = a^3",
          description: "Volume equals side cubed",
          example: "Cube with side 4cm: V = 4³ = 64 cm³"
        },
        {
          id: "cuboid-volume",
          name: "Volume of Cuboid",
          formula: "V = l \\times w \\times h",
          description: "Volume equals length times width times height",
          example: "Cuboid 6cm × 4cm × 3cm: V = 6 × 4 × 3 = 72 cm³"
        },
        {
          id: "cylinder-volume",
          name: "Volume of Cylinder",
          formula: "V = \\pi r^2 h",
          description: "Volume equals pi times radius squared times height",
          example: "Cylinder with radius 3cm and height 10cm: V = π × 3² × 10 = 90π cm³"
        },
        {
          id: "sphere-volume",
          name: "Volume of Sphere",
          formula: "V = \\frac{4}{3}\\pi r^3",
          description: "Volume equals four-thirds pi times radius cubed",
          example: "Sphere with radius 6cm: V = (4/3)π × 6³ = 288π cm³"
        }
      ]
    },
    {
      id: "2d-3d-shapes",
      title: "2D & 3D Shapes",
      formulas: [
        {
          id: "perimeter-formulas",
          name: "Perimeter Formulas",
          formula: "\\text{Rectangle: } P = 2(l + w), \\text{ Circle: } P = 2\\pi r",
          description: "Perimeter is the distance around a shape",
          example: "Rectangle 5×3: P = 2(5+3) = 16. Circle radius 4: P = 2π×4 = 8π"
        },
        {
          id: "surface-area-cube",
          name: "Surface Area of Cube",
          formula: "SA = 6a^2",
          description: "Surface area equals 6 times side squared",
          example: "Cube with side 5cm: SA = 6 × 5² = 150 cm²"
        },
        {
          id: "surface-area-cylinder",
          name: "Surface Area of Cylinder",
          formula: "SA = 2\\pi r^2 + 2\\pi rh",
          description: "Surface area equals area of two circles plus curved surface",
          example: "Cylinder r=3, h=8: SA = 2π(3²) + 2π(3)(8) = 18π + 48π = 66π cm²"
        }
      ]
    },
    {
      id: "real-world-applications",
      title: "Real-world Applications",
      formulas: [
        {
          id: "room-painting",
          name: "Room Painting",
          formula: "\\text{Wall Area} = 2(lh + wh) - \\text{Door/Window Area}",
          description: "Calculate paint needed for room walls",
          example: "Room 4m×3m×2.5m high with 2m² door: Wall area = 2(4×2.5 + 3×2.5) - 2 = 33 m²"
        },
        {
          id: "water-tank",
          name: "Water Tank Capacity",
          formula: "\\text{Capacity} = \\text{Volume in liters} = \\text{Volume in cm³} \\div 1000",
          description: "Convert volume to liquid capacity",
          example: "Cylindrical tank r=50cm, h=100cm: V = π×50²×100 = 250,000π cm³ ≈ 785 liters"
        },
        {
          id: "land-area",
          name: "Land Area Calculation",
          formula: "\\text{Area in acres} = \\text{Area in m²} \\div 4047",
          description: "Convert area measurements for land",
          example: "Rectangular plot 100m × 80m = 8000 m² = 8000 ÷ 4047 ≈ 1.98 acres"
        }
      ]
    }
  ]
};
