import { MathSection } from "../components/shared/MathPageTemplate";

export const geometrySections: MathSection[] = [
  {
    id: "angles",
    title: "Angles",
    description: "Fundamental angle relationships and properties",
    items: [
      {
        id: "straight-line-angles",
        name: "Sum of angles on a straight line",
        formula: "180°",
        example: {
          problem: "Find angle x if angles on a straight line are 120° and x",
          solution: "x = 60°",
          steps: [
            "Angles on a straight line sum to 180°",
            "So: 120° + x = 180°",
            "Subtract 120° from both sides: x = 180° - 120°",
            "Therefore: x = 60°",
          ],
        },
      },
      {
        id: "point-angles",
        name: "Sum of angles around a point",
        formula: "360°",
        example: {
          problem:
            "Find angle y if angles around a point are 90°, 120°, 80°, and y",
          solution: "y = 70°",
          steps: [
            "Angles around a point sum to 360°",
            "So: 90° + 120° + 80° + y = 360°",
            "Simplify: 290° + y = 360°",
            "Therefore: y = 360° - 290° = 70°",
          ],
        },
      },
      {
        id: "vertically-opposite",
        name: "Vertically opposite angles",
        formula: "Equal",
        example: {
          problem: "If one angle is 45°, find its vertically opposite angle",
          solution: "45°",
          steps: [
            "Vertically opposite angles are equal",
            "Given angle = 45°",
            "Vertically opposite angle = 45°",
            "This is a fundamental property of intersecting lines",
          ],
        },
      },
      {
        id: "polygon-interior",
        name: "Interior angles of a polygon",
        formula: "$(n - 2) \\times 180°$, where n = number of sides",
        example: {
          problem: "Find the sum of interior angles of a hexagon",
          solution: "720°",
          steps: [
            "A hexagon has n = 6 sides",
            "Apply formula: $(n - 2) \\times 180°$",
            "Substitute: $(6 - 2) \\times 180°$",
            "Calculate: $4 \\times 180° = 720°$",
          ],
        },
      },
      {
        id: "regular-polygon-angle",
        name: "Each angle of a regular polygon",
        formula: "$\\frac{(n - 2) \\times 180°}{n}$",
        example: {
          problem: "Find each interior angle of a regular pentagon",
          solution: "108°",
          steps: [
            "A pentagon has n = 5 sides",
            "Apply formula: $\\frac{(n - 2) \\times 180°}{n}$",
            "Substitute: $\\frac{(5 - 2) \\times 180°}{5}$",
            "Calculate: $\\frac{3 \\times 180°}{5} = \\frac{540°}{5} = 108°$",
          ],
        },
      },
    ],
  },
  {
    id: "triangles",
    title: "Triangles",
    description: "Triangle properties, areas, and special relationships",
    items: [
      {
        id: "triangle-area",
        name: "Area (base × height)",
        formula: "$\\frac{1}{2} \\times \\text{base} \\times \\text{height}$",
        example: {
          problem: "Find the area of a triangle with base 8 cm and height 6 cm",
          solution: "24 cm²",
          steps: [
            "Given: base = 8 cm, height = 6 cm",
            "Apply formula: $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$",
            "Substitute: $\\frac{1}{2} \\times 8 \\times 6$",
            "Calculate: $\\frac{1}{2} \\times 48 = 24$ cm²",
          ],
        },
      },
      {
        id: "herons-formula",
        name: "Heron's Formula",
        formula: "$\\sqrt{s(s-a)(s-b)(s-c)}$, where $s = \\frac{a+b+c}{2}$",
        example: {
          problem: "Find area of triangle with sides 3, 4, 5",
          solution: "6 square units",
          steps: [
            "Calculate semi-perimeter: $s = \\frac{3+4+5}{2} = 6$",
            "Apply Heron's formula: $\\sqrt{s(s-a)(s-b)(s-c)}$",
            "Substitute: $\\sqrt{6(6-3)(6-4)(6-5)}$",
            "Calculate: $\\sqrt{6 \\times 3 \\times 2 \\times 1} = \\sqrt{36} = 6$",
          ],
        },
      },
      {
        id: "pythagoras",
        name: "Pythagoras Theorem (Right triangle)",
        formula: "$a^2 + b^2 = c^2$, where c is the hypotenuse",
        example: {
          problem: "Find the hypotenuse if legs are 3 and 4",
          solution: "5 units",
          steps: [
            "Given: a = 3, b = 4",
            "Apply Pythagoras theorem: $a^2 + b^2 = c^2$",
            "Substitute: $3^2 + 4^2 = c^2$",
            "Calculate: $9 + 16 = 25$, so $c = \\sqrt{25} = 5$",
          ],
        },
      },
      {
        id: "triangle-angle-sum",
        name: "Sum of interior angles",
        formula: "180°",
        example: {
          problem: "Find the third angle if two angles are 60° and 70°",
          solution: "50°",
          steps: [
            "Sum of angles in a triangle = 180°",
            "Given angles: 60° and 70°",
            "Third angle = 180° - 60° - 70°",
            "Therefore: Third angle = 50°",
          ],
        },
      },
      {
        id: "equilateral-area",
        name: "Area of equilateral triangle",
        formula: "$\\frac{\\sqrt{3}}{4} \\times a^2$",
        example: {
          problem: "Find area of equilateral triangle with side 6",
          solution: "$9\\sqrt{3}$ square units",
          steps: [
            "Given: side length a = 6",
            "Apply formula: $\\frac{\\sqrt{3}}{4} \\times a^2$",
            "Substitute: $\\frac{\\sqrt{3}}{4} \\times 6^2$",
            "Calculate: $\\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3}$",
          ],
        },
      },
      {
        id: "equilateral-height",
        name: "Height of equilateral triangle",
        formula: "$\\frac{\\sqrt{3}}{2} \\times a$",
        example: {
          problem: "Find height of equilateral triangle with side 8",
          solution: "$4\\sqrt{3}$ units",
          steps: [
            "Given: side length a = 8",
            "Apply formula: $\\frac{\\sqrt{3}}{2} \\times a$",
            "Substitute: $\\frac{\\sqrt{3}}{2} \\times 8$",
            "Calculate: $\\frac{8\\sqrt{3}}{2} = 4\\sqrt{3}$",
          ],
        },
      },
    ],
  },
  {
    id: "quadrilaterals",
    title: "Quadrilaterals",
    description: "Areas and perimeters of four-sided figures",
    items: [
      {
        id: "square-area",
        name: "Area of square",
        formula: "$a^2$",
        example: {
          problem: "Find area of square with side 7 cm",
          solution: "49 cm²",
          steps: [
            "Given: side length a = 7 cm",
            "Apply formula: $a^2$",
            "Substitute: $7^2$",
            "Calculate: $49$ cm²",
          ],
        },
      },
      {
        id: "square-perimeter",
        name: "Perimeter of square",
        formula: "$4a$",
        example: {
          problem: "Find perimeter of square with side 5 cm",
          solution: "20 cm",
          steps: [
            "Given: side length a = 5 cm",
            "Apply formula: $4a$",
            "Substitute: $4 \\times 5$",
            "Calculate: $20$ cm",
          ],
        },
      },
      {
        id: "rectangle-area",
        name: "Area of rectangle",
        formula: "$\\text{length} \\times \\text{breadth}$",
        example: {
          problem: "Find area of rectangle with length 8 cm and breadth 5 cm",
          solution: "40 cm²",
          steps: [
            "Given: length = 8 cm, breadth = 5 cm",
            "Apply formula: $\\text{length} \\times \\text{breadth}$",
            "Substitute: $8 \\times 5$",
            "Calculate: $40$ cm²",
          ],
        },
      },
      {
        id: "rectangle-perimeter",
        name: "Perimeter of rectangle",
        formula: "$2(\\text{length} + \\text{breadth})$",
        example: {
          problem:
            "Find perimeter of rectangle with length 10 cm and breadth 6 cm",
          solution: "32 cm",
          steps: [
            "Given: length = 10 cm, breadth = 6 cm",
            "Apply formula: $2(\\text{length} + \\text{breadth})$",
            "Substitute: $2(10 + 6)$",
            "Calculate: $2 \\times 16 = 32$ cm",
          ],
        },
      },
      {
        id: "parallelogram-area",
        name: "Area of parallelogram",
        formula: "$\\text{base} \\times \\text{height}$",
        example: {
          problem: "Find area of parallelogram with base 12 cm and height 8 cm",
          solution: "96 cm²",
          steps: [
            "Given: base = 12 cm, height = 8 cm",
            "Apply formula: $\\text{base} \\times \\text{height}$",
            "Substitute: $12 \\times 8$",
            "Calculate: $96$ cm²",
          ],
        },
      },
      {
        id: "rhombus-area",
        name: "Area of rhombus",
        formula: "$\\frac{1}{2} \\times d_1 \\times d_2$",
        example: {
          problem: "Find area of rhombus with diagonals 10 cm and 8 cm",
          solution: "40 cm²",
          steps: [
            "Given: diagonal 1 = 10 cm, diagonal 2 = 8 cm",
            "Apply formula: $\\frac{1}{2} \\times d_1 \\times d_2$",
            "Substitute: $\\frac{1}{2} \\times 10 \\times 8$",
            "Calculate: $\\frac{1}{2} \\times 80 = 40$ cm²",
          ],
        },
      },
      {
        id: "trapezium-area",
        name: "Area of trapezium",
        formula:
          "$\\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times \\text{height}$",
        example: {
          problem:
            "Find area of trapezium with parallel sides 12 cm, 8 cm and height 5 cm",
          solution: "50 cm²",
          steps: [
            "Given: parallel sides = 12 cm and 8 cm, height = 5 cm",
            "Apply formula: $\\frac{1}{2} \\times (\\text{sum of parallel sides}) \\times \\text{height}$",
            "Substitute: $\\frac{1}{2} \\times (12 + 8) \\times 5$",
            "Calculate: $\\frac{1}{2} \\times 20 \\times 5 = 50$ cm²",
          ],
        },
      },
    ],
  },
  {
    id: "circles",
    title: "Circles",
    description: "Circle properties, circumference, area, and sectors",
    items: [
      {
        id: "circumference",
        name: "Circumference",
        formula: "$2\\pi r$",
        example: {
          problem: "Find circumference of circle with radius 7 cm",
          solution: "$14\\pi$ cm ≈ 44 cm",
          steps: [
            "Given: radius r = 7 cm",
            "Apply formula: $2\\pi r$",
            "Substitute: $2\\pi \\times 7$",
            "Calculate: $14\\pi$ cm ≈ 44 cm",
          ],
        },
      },
      {
        id: "circle-area",
        name: "Area",
        formula: "$\\pi r^2$",
        example: {
          problem: "Find area of circle with radius 5 cm",
          solution: "$25\\pi$ cm² ≈ 78.5 cm²",
          steps: [
            "Given: radius r = 5 cm",
            "Apply formula: $\\pi r^2$",
            "Substitute: $\\pi \\times 5^2$",
            "Calculate: $\\pi \\times 25 = 25\\pi$ cm²",
          ],
        },
      },
      {
        id: "semicircle-area",
        name: "Area of semicircle",
        formula: "$\\frac{1}{2} \\pi r^2$",
        example: {
          problem: "Find area of semicircle with radius 6 cm",
          solution: "$18\\pi$ cm² ≈ 56.5 cm²",
          steps: [
            "Given: radius r = 6 cm",
            "Apply formula: $\\frac{1}{2} \\pi r^2$",
            "Substitute: $\\frac{1}{2} \\pi \\times 6^2$",
            "Calculate: $\\frac{1}{2} \\times 36\\pi = 18\\pi$ cm²",
          ],
        },
      },
      {
        id: "arc-length",
        name: "Length of arc",
        formula: "$\\frac{\\theta}{360°} \\times 2\\pi r$",
        example: {
          problem: "Find arc length for 60° in circle with radius 9 cm",
          solution: "$3\\pi$ cm ≈ 9.4 cm",
          steps: [
            "Given: θ = 60°, radius r = 9 cm",
            "Apply formula: $\\frac{\\theta}{360°} \\times 2\\pi r$",
            "Substitute: $\\frac{60°}{360°} \\times 2\\pi \\times 9$",
            "Calculate: $\\frac{1}{6} \\times 18\\pi = 3\\pi$ cm",
          ],
        },
      },
      {
        id: "sector-area",
        name: "Area of sector",
        formula: "$\\frac{\\theta}{360°} \\times \\pi r^2$",
        example: {
          problem: "Find sector area for 90° in circle with radius 8 cm",
          solution: "$16\\pi$ cm² ≈ 50.3 cm²",
          steps: [
            "Given: θ = 90°, radius r = 8 cm",
            "Apply formula: $\\frac{\\theta}{360°} \\times \\pi r^2$",
            "Substitute: $\\frac{90°}{360°} \\times \\pi \\times 8^2$",
            "Calculate: $\\frac{1}{4} \\times 64\\pi = 16\\pi$ cm²",
          ],
        },
      },
      {
        id: "diameter",
        name: "Diameter",
        formula: "$2r$",
        example: {
          problem: "Find diameter of circle with radius 12 cm",
          solution: "24 cm",
          steps: [
            "Given: radius r = 12 cm",
            "Apply formula: $2r$",
            "Substitute: $2 \\times 12$",
            "Calculate: $24$ cm",
          ],
        },
      },
    ],
  },
  {
    id: "polygons",
    title: "Polygons",
    description: "General polygon properties and angle relationships",
    items: [
      {
        id: "polygon-interior-sum",
        name: "Sum of interior angles",
        formula: "$(n - 2) \\times 180°$",
        example: {
          problem: "Find sum of interior angles of an octagon",
          solution: "1080°",
          steps: [
            "An octagon has n = 8 sides",
            "Apply formula: $(n - 2) \\times 180°$",
            "Substitute: $(8 - 2) \\times 180°$",
            "Calculate: $6 \\times 180° = 1080°$",
          ],
        },
      },
      {
        id: "polygon-exterior-sum",
        name: "Sum of exterior angles",
        formula: "360°",
        example: {
          problem: "What is the sum of exterior angles of any polygon?",
          solution: "360°",
          steps: [
            "The sum of exterior angles is constant for all polygons",
            "This is true regardless of the number of sides",
            "Sum of exterior angles = 360°",
            "This is a fundamental property of polygons",
          ],
        },
      },
      {
        id: "regular-polygon-exterior",
        name: "Each exterior angle of regular polygon",
        formula: "$\\frac{360°}{n}$",
        example: {
          problem: "Find each exterior angle of a regular hexagon",
          solution: "60°",
          steps: [
            "A hexagon has n = 6 sides",
            "Apply formula: $\\frac{360°}{n}$",
            "Substitute: $\\frac{360°}{6}$",
            "Calculate: $60°$",
          ],
        },
      },
    ],
  },
  {
    id: "solid-geometry",
    title: "SolidGeometry",
    description: "Volume and surface area of 3D shapes",
    items: [
      {
        id: "cuboid-volume",
        name: "Cuboid Volume",
        formula: "$l \\times b \\times h$",
        example: {
          problem:
            "Find volume of cuboid with length 8 cm, breadth 5 cm, height 3 cm",
          solution: "120 cm³",
          steps: [
            "Given: length = 8 cm, breadth = 5 cm, height = 3 cm",
            "Apply formula: $l \\times b \\times h$",
            "Substitute: $8 \\times 5 \\times 3$",
            "Calculate: $120$ cm³",
          ],
        },
      },
      {
        id: "cuboid-surface-area",
        name: "Cuboid Surface area",
        formula: "$2(lb + bh + hl)$",
        example: {
          problem: "Find surface area of cuboid with l=6, b=4, h=3",
          solution: "108 square units",
          steps: [
            "Given: l = 6, b = 4, h = 3",
            "Apply formula: $2(lb + bh + hl)$",
            "Substitute: $2(6×4 + 4×3 + 3×6)$",
            "Calculate: $2(24 + 12 + 18) = 2×54 = 108$",
          ],
        },
      },
      {
        id: "cube-volume",
        name: "Cube Volume",
        formula: "$a^3$",
        example: {
          problem: "Find volume of cube with side 4 cm",
          solution: "64 cm³",
          steps: [
            "Given: side length a = 4 cm",
            "Apply formula: $a^3$",
            "Substitute: $4^3$",
            "Calculate: $64$ cm³",
          ],
        },
      },
      {
        id: "cube-surface-area",
        name: "Cube Surface area",
        formula: "$6a^2$",
        example: {
          problem: "Find surface area of cube with side 5 cm",
          solution: "150 cm²",
          steps: [
            "Given: side length a = 5 cm",
            "Apply formula: $6a^2$",
            "Substitute: $6 \\times 5^2$",
            "Calculate: $6 \\times 25 = 150$ cm²",
          ],
        },
      },
      {
        id: "cylinder-volume",
        name: "Cylinder Volume",
        formula: "$\\pi r^2 h$",
        example: {
          problem: "Find volume of cylinder with radius 3 cm and height 7 cm",
          solution: "$63\\pi$ cm³ ≈ 198 cm³",
          steps: [
            "Given: radius r = 3 cm, height h = 7 cm",
            "Apply formula: $\\pi r^2 h$",
            "Substitute: $\\pi \\times 3^2 \\times 7$",
            "Calculate: $\\pi \\times 9 \\times 7 = 63\\pi$ cm³",
          ],
        },
      },
      {
        id: "cylinder-csa",
        name: "Cylinder Curved surface area (CSA)",
        formula: "$2\\pi rh$",
        example: {
          problem: "Find CSA of cylinder with radius 4 cm and height 10 cm",
          solution: "$80\\pi$ cm² ≈ 251 cm²",
          steps: [
            "Given: radius r = 4 cm, height h = 10 cm",
            "Apply formula: $2\\pi rh$",
            "Substitute: $2\\pi \\times 4 \\times 10$",
            "Calculate: $80\\pi$ cm²",
          ],
        },
      },
      {
        id: "cylinder-tsa",
        name: "Cylinder Total surface area (TSA)",
        formula: "$2\\pi r(r + h)$",
        example: {
          problem: "Find TSA of cylinder with radius 5 cm and height 8 cm",
          solution: "$130\\pi$ cm² ≈ 408 cm²",
          steps: [
            "Given: radius r = 5 cm, height h = 8 cm",
            "Apply formula: $2\\pi r(r + h)$",
            "Substitute: $2\\pi \\times 5 \\times (5 + 8)$",
            "Calculate: $2\\pi \\times 5 \\times 13 = 130\\pi$ cm²",
          ],
        },
      },
      {
        id: "cone-volume",
        name: "Cone Volume",
        formula: "$\\frac{1}{3}\\pi r^2 h$",
        example: {
          problem: "Find volume of cone with radius 6 cm and height 9 cm",
          solution: "$108\\pi$ cm³ ≈ 339 cm³",
          steps: [
            "Given: radius r = 6 cm, height h = 9 cm",
            "Apply formula: $\\frac{1}{3}\\pi r^2 h$",
            "Substitute: $\\frac{1}{3}\\pi \\times 6^2 \\times 9$",
            "Calculate: $\\frac{1}{3}\\pi \\times 36 \\times 9 = 108\\pi$ cm³",
          ],
        },
      },
      {
        id: "cone-slant-height",
        name: "Cone Slant height",
        formula: "$l = \\sqrt{r^2 + h^2}$",
        example: {
          problem: "Find slant height of cone with radius 3 cm and height 4 cm",
          solution: "5 cm",
          steps: [
            "Given: radius r = 3 cm, height h = 4 cm",
            "Apply formula: $l = \\sqrt{r^2 + h^2}$",
            "Substitute: $l = \\sqrt{3^2 + 4^2}$",
            "Calculate: $l = \\sqrt{9 + 16} = \\sqrt{25} = 5$ cm",
          ],
        },
      },
      {
        id: "sphere-volume",
        name: "Sphere Volume",
        formula: "$\\frac{4}{3}\\pi r^3$",
        example: {
          problem: "Find volume of sphere with radius 3 cm",
          solution: "$36\\pi$ cm³ ≈ 113 cm³",
          steps: [
            "Given: radius r = 3 cm",
            "Apply formula: $\\frac{4}{3}\\pi r^3$",
            "Substitute: $\\frac{4}{3}\\pi \\times 3^3$",
            "Calculate: $\\frac{4}{3}\\pi \\times 27 = 36\\pi$ cm³",
          ],
        },
      },
      {
        id: "sphere-surface-area",
        name: "Sphere Surface area",
        formula: "$4\\pi r^2$",
        example: {
          problem: "Find surface area of sphere with radius 7 cm",
          solution: "$196\\pi$ cm² ≈ 616 cm²",
          steps: [
            "Given: radius r = 7 cm",
            "Apply formula: $4\\pi r^2$",
            "Substitute: $4\\pi \\times 7^2$",
            "Calculate: $4\\pi \\times 49 = 196\\pi$ cm²",
          ],
        },
      },
      {
        id: "hemisphere-volume",
        name: "Hemisphere Volume",
        formula: "$\\frac{2}{3}\\pi r^3$",
        example: {
          problem: "Find volume of hemisphere with radius 6 cm",
          solution: "$144\\pi$ cm³ ≈ 452 cm³",
          steps: [
            "Given: radius r = 6 cm",
            "Apply formula: $\\frac{2}{3}\\pi r^3$",
            "Substitute: $\\frac{2}{3}\\pi \\times 6^3$",
            "Calculate: $\\frac{2}{3}\\pi \\times 216 = 144\\pi$ cm³",
          ],
        },
      },
      {
        id: "hemisphere-csa",
        name: "Hemisphere CSA",
        formula: "$2\\pi r^2$",
        example: {
          problem: "Find curved surface area of hemisphere with radius 5 cm",
          solution: "$50\\pi$ cm² ≈ 157 cm²",
          steps: [
            "Given: radius r = 5 cm",
            "Apply formula: $2\\pi r^2$",
            "Substitute: $2\\pi \\times 5^2$",
            "Calculate: $2\\pi \\times 25 = 50\\pi$ cm²",
          ],
        },
      },
      {
        id: "hemisphere-tsa",
        name: "Hemisphere TSA",
        formula: "$3\\pi r^2$",
        example: {
          problem: "Find total surface area of hemisphere with radius 4 cm",
          solution: "$48\\pi$ cm² ≈ 151 cm²",
          steps: [
            "Given: radius r = 4 cm",
            "Apply formula: $3\\pi r^2$",
            "Substitute: $3\\pi \\times 4^2$",
            "Calculate: $3\\pi \\times 16 = 48\\pi$ cm²",
          ],
        },
      },
    ],
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description: "Trigonometric ratios and standard angle values",
    items: [
      {
        id: "trig-0-degrees",
        name: "0° (sin, cos, tan)",
        formula: "$\\sin 0° = 0, \\cos 0° = 1, \\tan 0° = 0$",
        example: {
          problem: "Find the values of all trigonometric ratios for 0°",
          solution:
            "$\\sin 0° = 0, \\cos 0° = 1, \\tan 0° = 0, \\cot 0° = \\text{undefined}, \\sec 0° = 1, \\cosec 0° = \\text{undefined}$",
          steps: [
            "For angle θ = 0°:",
            "$\\sin 0° = 0$ (opposite side = 0)",
            "$\\cos 0° = 1$ (adjacent side = hypotenuse)",
            "$\\tan 0° = \\frac{\\sin 0°}{\\cos 0°} = \\frac{0}{1} = 0$",
            "$\\cot 0° = \\frac{1}{\\tan 0°} = \\frac{1}{0} = \\text{undefined}$",
            "$\\sec 0° = \\frac{1}{\\cos 0°} = \\frac{1}{1} = 1$",
            "$\\cosec 0° = \\frac{1}{\\sin 0°} = \\frac{1}{0} = \\text{undefined}$",
          ],
        },
      },
      {
        id: "trig-30-degrees",
        name: "30° (sin, cos, tan)",
        formula:
          "$\\sin 30° = \\frac{1}{2}, \\cos 30° = \\frac{\\sqrt{3}}{2}, \\tan 30° = \\frac{1}{\\sqrt{3}}$",
        example: {
          problem: "Find the values of all trigonometric ratios for 30°",
          solution:
            "$\\sin 30° = \\frac{1}{2}, \\cos 30° = \\frac{\\sqrt{3}}{2}, \\tan 30° = \\frac{1}{\\sqrt{3}}, \\cot 30° = \\sqrt{3}, \\sec 30° = \\frac{2}{\\sqrt{3}}, \\cosec 30° = 2$",
          steps: [
            "For angle θ = 30°:",
            "$\\sin 30° = \\frac{1}{2}$ (standard value)",
            "$\\cos 30° = \\frac{\\sqrt{3}}{2}$ (standard value)",
            "$\\tan 30° = \\frac{\\sin 30°}{\\cos 30°} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$",
            "$\\cot 30° = \\frac{1}{\\tan 30°} = \\frac{1}{1/\\sqrt{3}} = \\sqrt{3}$",
            "$\\sec 30° = \\frac{1}{\\cos 30°} = \\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}}$",
            "$\\cosec 30° = \\frac{1}{\\sin 30°} = \\frac{1}{1/2} = 2$",
          ],
        },
      },
      {
        id: "trig-45-degrees",
        name: "45° (sin, cos, tan)",
        formula:
          "$\\sin 45° = \\frac{1}{\\sqrt{2}}, \\cos 45° = \\frac{1}{\\sqrt{2}}, \\tan 45° = 1$",
        example: {
          problem: "Find the values of all trigonometric ratios for 45°",
          solution:
            "$\\sin 45° = \\frac{1}{\\sqrt{2}}, \\cos 45° = \\frac{1}{\\sqrt{2}}, \\tan 45° = 1, \\cot 45° = 1, \\sec 45° = \\sqrt{2}, \\cosec 45° = \\sqrt{2}$",
          steps: [
            "For angle θ = 45°:",
            "$\\sin 45° = \\frac{1}{\\sqrt{2}}$ (standard value)",
            "$\\cos 45° = \\frac{1}{\\sqrt{2}}$ (standard value)",
            "$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = \\frac{1/\\sqrt{2}}{1/\\sqrt{2}} = 1$",
            "$\\cot 45° = \\frac{1}{\\tan 45°} = \\frac{1}{1} = 1$",
            "$\\sec 45° = \\frac{1}{\\cos 45°} = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2}$",
            "$\\cosec 45° = \\frac{1}{\\sin 45°} = \\frac{1}{1/\\sqrt{2}} = \\sqrt{2}$",
          ],
        },
      },
      {
        id: "trig-60-degrees",
        name: "60° (sin, cos, tan)",
        formula:
          "$\\sin 60° = \\frac{\\sqrt{3}}{2}, \\cos 60° = \\frac{1}{2}, \\tan 60° = \\sqrt{3}$",
        example: {
          problem: "Find the values of all trigonometric ratios for 60°",
          solution:
            "$\\sin 60° = \\frac{\\sqrt{3}}{2}, \\cos 60° = \\frac{1}{2}, \\tan 60° = \\sqrt{3}, \\cot 60° = \\frac{1}{\\sqrt{3}}, \\sec 60° = 2, \\cosec 60° = \\frac{2}{\\sqrt{3}}$",
          steps: [
            "For angle θ = 60°:",
            "$\\sin 60° = \\frac{\\sqrt{3}}{2}$ (standard value)",
            "$\\cos 60° = \\frac{1}{2}$ (standard value)",
            "$\\tan 60° = \\frac{\\sin 60°}{\\cos 60°} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$",
            "$\\cot 60° = \\frac{1}{\\tan 60°} = \\frac{1}{\\sqrt{3}}$",
            "$\\sec 60° = \\frac{1}{\\cos 60°} = \\frac{1}{1/2} = 2$",
            "$\\cosec 60° = \\frac{1}{\\sin 60°} = \\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}}$",
          ],
        },
      },
      {
        id: "trig-90-degrees",
        name: "90° (sin, cos, tan)",
        formula:
          "$\\sin 90° = 1, \\cos 90° = 0, \\tan 90° = \\text{undefined}$",
        example: {
          problem: "Find the values of all trigonometric ratios for 90°",
          solution:
            "$\\sin 90° = 1, \\cos 90° = 0, \\tan 90° = \\text{undefined}, \\cot 90° = 0, \\sec 90° = \\text{undefined}, \\cosec 90° = 1$",
          steps: [
            "For angle θ = 90°:",
            "$\\sin 90° = 1$ (opposite side = hypotenuse)",
            "$\\cos 90° = 0$ (adjacent side = 0)",
            "$\\tan 90° = \\frac{\\sin 90°}{\\cos 90°} = \\frac{1}{0} = \\text{undefined}$",
            "$\\cot 90° = \\frac{\\cos 90°}{\\sin 90°} = \\frac{0}{1} = 0$",
            "$\\sec 90° = \\frac{1}{\\cos 90°} = \\frac{1}{0} = \\text{undefined}$",
            "$\\cosec 90° = \\frac{1}{\\sin 90°} = \\frac{1}{1} = 1$",
          ],
        },
      },
      {
        id: "trig-table-summary",
        name: "Complete Trigonometric Table",
        formula: "Standard angles: 0°, 30°, 45°, 60°, 90°",
        example: {
          problem: "Create a complete trigonometric table for standard angles",
          solution:
            "Table with all six trigonometric ratios for five standard angles",
          steps: [
            "**Complete Trigonometric Ratios Table:**",
            "",
            "| θ | sin θ | cos θ | tan θ | cot θ | sec θ | cosec θ |",
            "|---|-------|-------|-------|-------|-------|---------|",
            "| 0° | 0 | 1 | 0 | ∞ | 1 | ∞ |",
            "| 30° | 1/2 | √3/2 | 1/√3 | √3 | 2/√3 | 2 |",
            "| 45° | 1/√2 | 1/√2 | 1 | 1 | √2 | √2 |",
            "| 60° | √3/2 | 1/2 | √3 | 1/√3 | 2 | 2/√3 |",
            "| 90° | 1 | 0 | ∞ | 0 | ∞ | 1 |",
            "",
            "**Memory Tips:**",
            "• sin increases from 0° to 90°: 0, 1/2, 1/√2, √3/2, 1",
            "• cos decreases from 0° to 90°: 1, √3/2, 1/√2, 1/2, 0",
            "• tan = sin/cos, cot = cos/sin, sec = 1/cos, cosec = 1/sin",
          ],
        },
      },
      {
        id: "trig-identities",
        name: "Basic Trigonometric Identities",
        formula: "$\\sin^2 θ + \\cos^2 θ = 1$",
        example: {
          problem: "Verify the Pythagorean identity for θ = 30°",
          solution: "$\\sin^2 30° + \\cos^2 30° = 1$ ✓",
          steps: [
            "Given: θ = 30°",
            "We know: $\\sin 30° = \\frac{1}{2}$ and $\\cos 30° = \\frac{\\sqrt{3}}{2}$",
            "Calculate: $\\sin^2 30° = (\\frac{1}{2})^2 = \\frac{1}{4}$",
            "Calculate: $\\cos^2 30° = (\\frac{\\sqrt{3}}{2})^2 = \\frac{3}{4}$",
            "Verify: $\\sin^2 30° + \\cos^2 30° = \\frac{1}{4} + \\frac{3}{4} = 1$ ✓",
            "This confirms the Pythagorean identity",
          ],
        },
      },
      {
        id: "trig-complementary",
        name: "Complementary Angle Relations",
        formula: "$\\sin(90° - θ) = \\cos θ, \\cos(90° - θ) = \\sin θ$",
        example: {
          problem: "Verify that sin 30° = cos 60° and cos 30° = sin 60°",
          solution: "Both relationships are verified",
          steps: [
            "Check: $\\sin 30° = \\cos(90° - 30°) = \\cos 60°$",
            "We know: $\\sin 30° = \\frac{1}{2}$ and $\\cos 60° = \\frac{1}{2}$ ✓",
            "Check: $\\cos 30° = \\sin(90° - 30°) = \\sin 60°$",
            "We know: $\\cos 30° = \\frac{\\sqrt{3}}{2}$ and $\\sin 60° = \\frac{\\sqrt{3}}{2}$ ✓",
            "This demonstrates complementary angle relationships",
            "Note: 30° and 60° are complementary angles (sum = 90°)",
          ],
        },
      },
    ],
  },
];
