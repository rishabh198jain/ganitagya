import { MathSection } from '../components/shared/MathPageTemplate';

export const calculusSections: MathSection[] = [
  {
    id: 'limits',
    title: 'Limits',
    description: 'Fundamental concepts of limits and continuity',
    items: [
      {
        id: 'constant-limit',
        name: 'Constant Limit',
        formula: '$\\lim_{x \\to a} c = c$',
        example: {
          problem: 'Find $\\lim_{x \\to 3} 5$',
          solution: '5',
          steps: [
            'The limit of a constant is the constant itself',
            'Therefore, $\\lim_{x \\to 3} 5 = 5$',
            'This is true regardless of the value of $a$',
            'The function $f(x) = 5$ is constant for all values of $x$'
          ]
        }
      },
      {
        id: 'identity-limit',
        name: 'Identity Function Limit',
        formula: '$\\lim_{x \\to a} x = a$',
        example: {
          problem: 'Find $\\lim_{x \\to 2} x$',
          solution: '2',
          steps: [
            'The limit of the identity function $f(x) = x$ as $x$ approaches $a$ is $a$',
            'Therefore, $\\lim_{x \\to 2} x = 2$',
            'This is because the function $f(x) = x$ is continuous everywhere',
            'As $x$ gets closer to 2, the function value gets closer to 2'
          ]
        }
      },
      {
        id: 'sum-limit',
        name: 'Sum Rule',
        formula: '$\\lim_{x \\to a} [f(x) + g(x)] = \\lim f(x) + \\lim g(x)$',
        example: {
          problem: 'Find $\\lim_{x \\to 1} (x^2 + 3x)$',
          solution: '4',
          steps: [
            'Using the sum rule: $\\lim_{x \\to 1} (x^2 + 3x) = \\lim_{x \\to 1} x^2 + \\lim_{x \\to 1} 3x$',
            'Calculate each limit separately:',
            '$\\lim_{x \\to 1} x^2 = 1^2 = 1$',
            '$\\lim_{x \\to 1} 3x = 3 \\cdot 1 = 3$',
            'Add the results: $1 + 3 = 4$'
          ]
        }
      },
      {
        id: 'sinx-over-x',
        name: 'Sine Limit',
        formula: '$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$',
        example: {
          problem: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin 2x}{x}$',
          solution: '2',
          steps: [
            'Rewrite as: $\\lim_{x \\to 0} \\frac{\\sin 2x}{x} = \\lim_{x \\to 0} \\frac{\\sin 2x}{2x} \\cdot 2$',
            'Let $u = 2x$, then as $x \\to 0$, $u \\to 0$',
            'So we have: $\\lim_{u \\to 0} \\frac{\\sin u}{u} \\cdot 2$',
            'We know that $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$',
            'Therefore: $\\lim_{x \\to 0} \\frac{\\sin 2x}{x} = 1 \\cdot 2 = 2$'
          ]
        }
      },
      {
        id: 'cos-limit',
        name: 'Cosine Limit',
        formula: '$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2} = \\dfrac{1}{2}$',
        example: {
          problem: 'Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos 3x}{x^2}$',
          solution: '$\\frac{9}{2}$',
          steps: [
            'Rewrite as: $\\lim_{x \\to 0} \\frac{1 - \\cos 3x}{x^2} = \\lim_{x \\to 0} \\frac{1 - \\cos 3x}{(3x)^2} \\cdot 9$',
            'Let $u = 3x$, then as $x \\to 0$, $u \\to 0$',
            'So we have: $\\lim_{u \\to 0} \\frac{1 - \\cos u}{u^2} \\cdot 9$',
            'We know that $\\lim_{u \\to 0} \\frac{1 - \\cos u}{u^2} = \\frac{1}{2}$',
            'Therefore: $\\lim_{x \\to 0} \\frac{1 - \\cos 3x}{x^2} = \\frac{1}{2} \\cdot 9 = \\frac{9}{2}$'
          ]
        }
      }
    ]
  },
  {
    id: 'derivatives',
    title: 'Derivatives',
    description: 'Rules and formulas for differentiation',
    items: [
      {
        id: 'derivative-definition',
        name: 'Derivative Definition',
        formula: '$f\'(x) = \\dfrac{dy}{dx} = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$',
        example: {
          problem: 'Find the derivative of $f(x) = x^2$ using the definition',
          solution: '$f\'(x) = 2x$',
          steps: [
            'Apply the definition: $f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$',
            'Substitute $f(x) = x^2$: $f\'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$',
            'Expand: $f\'(x) = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$',
            'Simplify: $f\'(x) = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h)$',
            'As $h \\to 0$: $f\'(x) = 2x$'
          ]
        }
      },
      {
        id: 'power-rule',
        name: 'Power Rule',
        formula: '$\\dfrac{d}{dx}(x^n) = nx^{n-1}$',
        example: {
          problem: 'Find the derivative of $f(x) = x^5$',
          solution: '$f\'(x) = 5x^4$',
          steps: [
            'Apply the power rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$',
            'For $f(x) = x^5$, we have $n = 5$',
            'Therefore: $f\'(x) = 5x^{5-1} = 5x^4$'
          ]
        }
      },
      {
        id: 'sin-derivative',
        name: 'Sine Derivative',
        formula: '$\\dfrac{d}{dx}(\\sin x) = \\cos x$',
        example: {
          problem: 'Find the derivative of $f(x) = \\sin 3x$',
          solution: '$f\'(x) = 3\\cos 3x$',
          steps: [
            'Apply the chain rule: $\\frac{d}{dx}[\\sin(g(x))] = \\cos(g(x)) \\cdot g\'(x)$',
            'Here $g(x) = 3x$, so $g\'(x) = 3$',
            'Therefore: $f\'(x) = \\cos(3x) \\cdot 3 = 3\\cos 3x$'
          ]
        }
      },
      {
        id: 'cos-derivative',
        name: 'Cosine Derivative',
        formula: '$\\dfrac{d}{dx}(\\cos x) = -\\sin x$',
        example: {
          problem: 'Find the derivative of $f(x) = \\cos 2x$',
          solution: '$f\'(x) = -2\\sin 2x$',
          steps: [
            'Apply the chain rule: $\\frac{d}{dx}[\\cos(g(x))] = -\\sin(g(x)) \\cdot g\'(x)$',
            'Here $g(x) = 2x$, so $g\'(x) = 2$',
            'Therefore: $f\'(x) = -\\sin(2x) \\cdot 2 = -2\\sin 2x$'
          ]
        }
      },
      {
        id: 'tan-derivative',
        name: 'Tangent Derivative',
        formula: '$\\dfrac{d}{dx}(\\tan x) = \\sec^2 x$',
        example: {
          problem: 'Find the derivative of $f(x) = \\tan x$',
          solution: '$f\'(x) = \\sec^2 x$',
          steps: [
            'Apply the formula: $\\frac{d}{dx}(\\tan x) = \\sec^2 x$',
            'Alternatively, use the quotient rule with $\\tan x = \\frac{\\sin x}{\\cos x}$',
            '$f\'(x) = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x}$',
            '$f\'(x) = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$'
          ]
        }
      },
      {
        id: 'exp-derivative',
        name: 'Exponential Derivative',
        formula: '$\\dfrac{d}{dx}(e^x) = e^x$',
        example: {
          problem: 'Find the derivative of $f(x) = e^{2x}$',
          solution: '$f\'(x) = 2e^{2x}$',
          steps: [
            'Apply the chain rule: $\\frac{d}{dx}[e^{g(x)}] = e^{g(x)} \\cdot g\'(x)$',
            'Here $g(x) = 2x$, so $g\'(x) = 2$',
            'Therefore: $f\'(x) = e^{2x} \\cdot 2 = 2e^{2x}$'
          ]
        }
      },
      {
        id: 'ln-derivative',
        name: 'Natural Log Derivative',
        formula: '$\\dfrac{d}{dx}(\\ln x) = \\dfrac{1}{x}$',
        example: {
          problem: 'Find the derivative of $f(x) = \\ln(x^2)$',
          solution: '$f\'(x) = \\frac{2}{x}$',
          steps: [
            'Apply the chain rule: $\\frac{d}{dx}[\\ln(g(x))] = \\frac{1}{g(x)} \\cdot g\'(x)$',
            'Here $g(x) = x^2$, so $g\'(x) = 2x$',
            'Therefore: $f\'(x) = \\frac{1}{x^2} \\cdot 2x = \\frac{2}{x}$'
          ]
        }
      },
      {
        id: 'product-rule',
        name: 'Product Rule',
        formula: '$\\dfrac{d}{dx}[u \\cdot v] = u\'v + uv\'$',
        example: {
          problem: 'Find the derivative of $f(x) = x^2 \\sin x$',
          solution: '$f\'(x) = 2x \\sin x + x^2 \\cos x$',
          steps: [
            'Let $u = x^2$ and $v = \\sin x$',
            'Find $u\' = 2x$ and $v\' = \\cos x$',
            'Apply the product rule: $\\frac{d}{dx}[u \\cdot v] = u\'v + uv\'$',
            'Substitute: $f\'(x) = 2x \\cdot \\sin x + x^2 \\cdot \\cos x$',
            'Therefore: $f\'(x) = 2x \\sin x + x^2 \\cos x$'
          ]
        }
      },
      {
        id: 'quotient-rule',
        name: 'Quotient Rule',
        formula: '$\\dfrac{d}{dx}\\left(\\dfrac{u}{v}\\right) = \\dfrac{v u\' - u v\'}{v^2}$',
        example: {
          problem: 'Find the derivative of $f(x) = \\frac{x}{\\sin x}$',
          solution: '$f\'(x) = \\frac{\\sin x - x\\cos x}{\\sin^2 x}$',
          steps: [
            'Let $u = x$ and $v = \\sin x$',
            'Find $u\' = 1$ and $v\' = \\cos x$',
            'Apply the quotient rule: $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u\' - u v\'}{v^2}$',
            'Substitute: $f\'(x) = \\frac{\\sin x \\cdot 1 - x \\cdot \\cos x}{\\sin^2 x}$',
            'Therefore: $f\'(x) = \\frac{\\sin x - x\\cos x}{\\sin^2 x}$'
          ]
        }
      },
      {
        id: 'chain-rule',
        name: 'Chain Rule',
        formula: '$\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx}$',
        example: {
          problem: 'Find the derivative of $f(x) = \\sin(x^2)$',
          solution: '$f\'(x) = 2x\\cos(x^2)$',
          steps: [
            'Let $u = x^2$ and $y = \\sin u$',
            'Find $\\frac{dy}{du} = \\cos u$ and $\\frac{du}{dx} = 2x$',
            'Apply the chain rule: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$',
            'Substitute: $f\'(x) = \\cos(x^2) \\cdot 2x$',
            'Therefore: $f\'(x) = 2x\\cos(x^2)$'
          ]
        }
      }
    ]
  },
  {
    id: 'integration',
    title: 'Integration',
    description: 'Basic integration formulas and techniques',
    items: [
      {
        id: 'power-rule-int',
        name: 'Power Rule Integration',
        formula: '$\\int x^n dx = \\dfrac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)',
        example: {
          problem: 'Find $\\int x^3 dx$',
          solution: '$\\frac{x^4}{4} + C$',
          steps: [
            'Apply the power rule: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$',
            'For $\\int x^3 dx$, we have $n = 3$',
            'Therefore: $\\int x^3 dx = \\frac{x^{3+1}}{3+1} + C = \\frac{x^4}{4} + C$'
          ]
        }
      },
      {
        id: 'ln-int',
        name: 'Logarithmic Integration',
        formula: '$\\int \\dfrac{1}{x} dx = \\ln|x| + C$',
        example: {
          problem: 'Find $\\int \\frac{1}{x} dx$',
          solution: '$\\ln|x| + C$',
          steps: [
            'Apply the formula: $\\int \\frac{1}{x} dx = \\ln|x| + C$',
            'The absolute value ensures the result is defined for all $x \\neq 0$',
            'For $x > 0$, $\\ln|x| = \\ln x$',
            'For $x < 0$, $\\ln|x| = \\ln(-x)$'
          ]
        }
      },
      {
        id: 'exp-int',
        name: 'Exponential Integration',
        formula: '$\\int e^x dx = e^x + C$',
        example: {
          problem: 'Find $\\int e^{2x} dx$',
          solution: '$\\frac{e^{2x}}{2} + C$',
          steps: [
            'Use substitution: let $u = 2x$, then $du = 2dx$ or $dx = \\frac{du}{2}$',
            'Rewrite: $\\int e^{2x} dx = \\int e^u \\cdot \\frac{du}{2}$',
            'Factor out constant: $\\frac{1}{2} \\int e^u du$',
            'Apply the formula: $\\frac{1}{2} \\cdot (e^u + C) = \\frac{e^u}{2} + C\'$',
            'Substitute back: $\\frac{e^{2x}}{2} + C$'
          ]
        }
      },
      {
        id: 'sin-int',
        name: 'Sine Integration',
        formula: '$\\int \\sin x dx = -\\cos x + C$',
        example: {
          problem: 'Find $\\int \\sin 3x dx$',
          solution: '$-\\frac{\\cos 3x}{3} + C$',
          steps: [
            'Use substitution: let $u = 3x$, then $du = 3dx$ or $dx = \\frac{du}{3}$',
            'Rewrite: $\\int \\sin 3x dx = \\int \\sin u \\cdot \\frac{du}{3}$',
            'Factor out constant: $\\frac{1}{3} \\int \\sin u du$',
            'Apply the formula: $\\frac{1}{3} \\cdot (-\\cos u + C) = -\\frac{\\cos u}{3} + C\'$',
            'Substitute back: $-\\frac{\\cos 3x}{3} + C$'
          ]
        }
      },
      {
        id: 'cos-int',
        name: 'Cosine Integration',
        formula: '$\\int \\cos x dx = \\sin x + C$',
        example: {
          problem: 'Find $\\int \\cos 2x dx$',
          solution: '$\\frac{\\sin 2x}{2} + C$',
          steps: [
            'Use substitution: let $u = 2x$, then $du = 2dx$ or $dx = \\frac{du}{2}$',
            'Rewrite: $\\int \\cos 2x dx = \\int \\cos u \\cdot \\frac{du}{2}$',
            'Factor out constant: $\\frac{1}{2} \\int \\cos u du$',
            'Apply the formula: $\\frac{1}{2} \\cdot (\\sin u + C) = \\frac{\\sin u}{2} + C\'$',
            'Substitute back: $\\frac{\\sin 2x}{2} + C$'
          ]
        }
      },
      {
        id: 'sec2-int',
        name: 'Secant Squared Integration',
        formula: '$\\int \\sec^2 x dx = \\tan x + C$',
        example: {
          problem: 'Find $\\int \\sec^2 3x dx$',
          solution: '$\\frac{\\tan 3x}{3} + C$',
          steps: [
            'Use substitution: let $u = 3x$, then $du = 3dx$ or $dx = \\frac{du}{3}$',
            'Rewrite: $\\int \\sec^2 3x dx = \\int \\sec^2 u \\cdot \\frac{du}{3}$',
            'Factor out constant: $\\frac{1}{3} \\int \\sec^2 u du$',
            'Apply the formula: $\\frac{1}{3} \\cdot (\\tan u + C) = \\frac{\\tan u}{3} + C\'$',
            'Substitute back: $\\frac{\\tan 3x}{3} + C$'
          ]
        }
      },
      {
        id: 'substitution',
        name: 'Integration by Substitution',
        formula: '$\\int f(g(x))g\'(x) dx = \\int f(u) du$',
        example: {
          problem: 'Find $\\int x\\cos(x^2) dx$',
          solution: '$\\frac{\\sin(x^2)}{2} + C$',
          steps: [
            'Let $u = x^2$, then $du = 2x dx$ or $x dx = \\frac{du}{2}$',
            'Rewrite: $\\int x\\cos(x^2) dx = \\int \\cos u \\cdot \\frac{du}{2}$',
            'Factor out constant: $\\frac{1}{2} \\int \\cos u du$',
            'Apply the formula: $\\frac{1}{2} \\cdot (\\sin u + C) = \\frac{\\sin u}{2} + C\'$',
            'Substitute back: $\\frac{\\sin(x^2)}{2} + C$'
          ]
        }
      },
      {
        id: 'integration-by-parts',
        name: 'Integration by Parts',
        formula: '$\\int u v dx = u \\int v dx - \\int \\left(\\dfrac{du}{dx} \\int v dx\\right) dx$',
        example: {
          problem: 'Find $\\int x\\sin x dx$',
          solution: '$-x\\cos x + \\sin x + C$',
          steps: [
            'Use the formula: $\\int u v dx = u \\int v dx - \\int (\\frac{du}{dx} \\int v dx) dx$',
            'Let $u = x$ and $v = \\sin x$',
            'Then $\\frac{du}{dx} = 1$ and $\\int v dx = \\int \\sin x dx = -\\cos x$',
            'Substitute: $\\int x\\sin x dx = x(-\\cos x) - \\int (1 \\cdot (-\\cos x)) dx$',
            '$= -x\\cos x + \\int \\cos x dx$',
            '$= -x\\cos x + \\sin x + C$'
          ]
        }
      }
    ]
  },
  {
    id: 'definite-integrals',
    title: 'Definite Integrals',
    description: 'Evaluating definite integrals and applications',
    items: [
      {
        id: 'definite-integral',
        name: 'Fundamental Theorem of Calculus',
        formula: '$\\int_a^b f(x) dx = F(b) - F(a)$',
        example: {
          problem: 'Evaluate $\\int_0^1 x^2 dx$',
          solution: '$\\frac{1}{3}$',
          steps: [
            'Find the antiderivative: $F(x) = \\int x^2 dx = \\frac{x^3}{3} + C$',
            'Apply the Fundamental Theorem: $\\int_a^b f(x) dx = F(b) - F(a)$',
            'Substitute: $\\int_0^1 x^2 dx = F(1) - F(0) = \\frac{1^3}{3} - \\frac{0^3}{3}$',
            'Simplify: $\\frac{1}{3} - 0 = \\frac{1}{3}$'
          ]
        }
      },
      {
        id: 'area-under-curve',
        name: 'Area Under a Curve',
        formula: '$A = \\int_a^b y dx$',
        example: {
          problem: 'Find the area under the curve $y = x^2$ from $x = 0$ to $x = 2$',
          solution: '$\\frac{8}{3}$ square units',
          steps: [
            'The area under the curve is given by: $A = \\int_a^b y dx$',
            'Substitute $y = x^2$: $A = \\int_0^2 x^2 dx$',
            'Find the antiderivative: $\\int x^2 dx = \\frac{x^3}{3} + C$',
            'Apply the limits: $A = \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{2^3}{3} - \\frac{0^3}{3}$',
            'Simplify: $A = \\frac{8}{3} - 0 = \\frac{8}{3}$ square units'
          ]
        }
      }
    ]
  }
];
