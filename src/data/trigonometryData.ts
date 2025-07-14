export const trigonometryData = {
  sections: [
    {
      id: "trigonometric-ratios",
      title: "Trigonometric Ratios",
      formulas: [
        {
          id: "basic-ratios",
          name: "Basic Trigonometric Ratios",
          formula: "\\sin\\theta = \\frac{opposite}{hypotenuse}, \\cos\\theta = \\frac{adjacent}{hypotenuse}, \\tan\\theta = \\frac{opposite}{adjacent}",
          description: "The fundamental ratios in a right triangle",
          example: "In a right triangle with angle θ, if opposite = 3, adjacent = 4, hypotenuse = 5, then sin θ = 3/5, cos θ = 4/5, tan θ = 3/4"
        },
        {
          id: "reciprocal-ratios",
          name: "Reciprocal Ratios",
          formula: "\\csc\\theta = \\frac{1}{\\sin\\theta}, \\sec\\theta = \\frac{1}{\\cos\\theta}, \\cot\\theta = \\frac{1}{\\tan\\theta}",
          description: "The reciprocal trigonometric functions",
          example: "If sin θ = 3/5, then csc θ = 5/3"
        }
      ]
    },
    {
      id: "trigonometric-identities",
      title: "Trigonometric Identities",
      formulas: [
        {
          id: "pythagorean-identity",
          name: "Pythagorean Identity",
          formula: "\\sin^2\\theta + \\cos^2\\theta = 1",
          description: "The fundamental trigonometric identity",
          example: "If sin θ = 3/5, then cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25, so cos θ = ±4/5"
        },
        {
          id: "angle-sum-formulas",
          name: "Angle Sum and Difference Formulas",
          formula: "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B",
          description: "Formulas for sine of sum and difference of angles",
          example: "sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°"
        },
        {
          id: "double-angle-formulas",
          name: "Double Angle Formulas",
          formula: "\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta, \\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta",
          description: "Formulas for trigonometric functions of double angles",
          example: "If sin θ = 3/5 and cos θ = 4/5, then sin(2θ) = 2(3/5)(4/5) = 24/25"
        }
      ]
    },
    {
      id: "inverse-functions",
      title: "Inverse Trigonometric Functions",
      formulas: [
        {
          id: "inverse-definitions",
          name: "Inverse Function Definitions",
          formula: "\\arcsin x = \\sin^{-1} x, \\arccos x = \\cos^{-1} x, \\arctan x = \\tan^{-1} x",
          description: "Inverse trigonometric functions and their notation",
          example: "arcsin(1/2) = 30° or π/6 radians"
        },
        {
          id: "inverse-ranges",
          name: "Domain and Range of Inverse Functions",
          formula: "\\text{Domain of } \\arcsin: [-1, 1], \\text{ Range: } [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]",
          description: "The restricted domains and ranges of inverse trig functions",
          example: "arcsin is defined only for values between -1 and 1"
        }
      ]
    },
    {
      id: "applications",
      title: "Applications of Trigonometry",
      formulas: [
        {
          id: "law-of-sines",
          name: "Law of Sines",
          formula: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",
          description: "Relationship between sides and angles in any triangle",
          example: "In triangle ABC, if a = 10, A = 30°, B = 45°, then b = 10 × sin(45°)/sin(30°)"
        },
        {
          id: "law-of-cosines",
          name: "Law of Cosines",
          formula: "c^2 = a^2 + b^2 - 2ab\\cos C",
          description: "Generalization of Pythagorean theorem for any triangle",
          example: "If a = 5, b = 7, C = 60°, then c² = 25 + 49 - 2(5)(7)cos(60°) = 74 - 35 = 39"
        },
        {
          id: "area-formula",
          name: "Area of Triangle Using Trigonometry",
          formula: "\\text{Area} = \\frac{1}{2}ab\\sin C",
          description: "Formula for area when two sides and included angle are known",
          example: "Triangle with sides a = 6, b = 8, included angle C = 30° has area = (1/2)(6)(8)sin(30°) = 12"
        }
      ]
    }
  ]
};
