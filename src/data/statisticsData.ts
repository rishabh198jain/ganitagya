import { MathSection } from '../components/shared/MathPageTemplate';

export const statisticsSections: MathSection[] = [
  {
    id: 'measures-of-central-tendency',
    title: 'Central Tendency',
    description: 'Mean, median, and mode calculations',
    items: [
      {
        id: 'arithmetic-mean',
        name: 'Arithmetic Mean (Simple)',
        formula: '$\\bar{x} = \\dfrac{x_1 + x_2 + \\ldots + x_n}{n}$',
        example: {
          problem: 'Find the mean of the data: 5, 8, 12, 15, 20',
          solution: '$\\bar{x} = 12$',
          steps: [
            'Given data: 5, 8, 12, 15, 20',
            'Count the number of values: $n = 5$',
            'Sum all values: $5 + 8 + 12 + 15 + 20 = 60$',
            'Apply the formula: $\\bar{x} = \\frac{60}{5} = 12$'
          ]
        }
      },
      {
        id: 'weighted-mean',
        name: 'Weighted Mean (Grouped Data)',
        formula: '$\\bar{x} = \\dfrac{\\sum f_i x_i}{\\sum f_i}$',
        example: {
          problem: 'Find the mean for grouped data: (10,2), (20,5), (30,3) where (value, frequency)',
          solution: '$\\bar{x} = 20$',
          steps: [
            'Given: $(x_i, f_i) = (10,2), (20,5), (30,3)$',
            'Calculate $\\sum f_i x_i = 10 \\times 2 + 20 \\times 5 + 30 \\times 3$',
            '$= 20 + 100 + 90 = 210$',
            'Calculate $\\sum f_i = 2 + 5 + 3 = 10$',
            'Apply the formula: $\\bar{x} = \\frac{210}{10} = 20$'
          ]
        }
      },
      {
        id: 'median-odd',
        name: 'Median (Odd Number of Values)',
        formula: 'Middle term when arranged in order',
        example: {
          problem: 'Find the median of: 3, 7, 9, 12, 15',
          solution: 'Median = 9',
          steps: [
            'Arrange in ascending order: 3, 7, 9, 12, 15',
            'Count the number of values: $n = 5$ (odd)',
            'Position of median: $\\frac{n+1}{2} = \\frac{5+1}{2} = 3$rd position',
            'The 3rd value is 9, so median = 9'
          ]
        }
      },
      {
        id: 'median-even',
        name: 'Median (Even Number of Values)',
        formula: 'Mean of two middle terms',
        example: {
          problem: 'Find the median of: 4, 6, 8, 10, 12, 14',
          solution: 'Median = 9',
          steps: [
            'Arrange in ascending order: 4, 6, 8, 10, 12, 14',
            'Count the number of values: $n = 6$ (even)',
            'Middle positions: $\\frac{n}{2} = 3$rd and $(\\frac{n}{2} + 1) = 4$th',
            'Middle values are 8 and 10',
            'Median = $\\frac{8 + 10}{2} = 9$'
          ]
        }
      },
      {
        id: 'median-grouped',
        name: 'Median (Grouped Data)',
        formula: '$\\text{Median} = L + \\dfrac{\\dfrac{N}{2} - F}{f} \\cdot h$',
        example: {
          problem: 'Find median for class intervals: (0-10,3), (10-20,7), (20-30,5), (30-40,2)',
          solution: 'Median ≈ 15.7',
          steps: [
            'Total frequency: $N = 3 + 7 + 5 + 2 = 17$',
            'Position of median: $\\frac{N}{2} = \\frac{17}{2} = 8.5$',
            'Cumulative frequencies: 3, 10, 15, 17',
            'Median class is 10-20 (cumulative frequency 10 > 8.5)',
            '$L = 10, f = 7, F = 3, h = 10$',
            'Median = $10 + \\frac{8.5 - 3}{7} \\times 10 = 10 + \\frac{5.5}{7} \\times 10 ≈ 15.7$'
          ]
        }
      },
      {
        id: 'mode-simple',
        name: 'Mode (Simple Data)',
        formula: 'Most frequently occurring value',
        example: {
          problem: 'Find the mode of: 2, 3, 3, 5, 5, 5, 7, 8',
          solution: 'Mode = 5',
          steps: [
            'Count frequency of each value:',
            '2 appears 1 time, 3 appears 2 times',
            '5 appears 3 times, 7 appears 1 time, 8 appears 1 time',
            'The value 5 has the highest frequency (3)',
            'Therefore, mode = 5'
          ]
        }
      },
      {
        id: 'mode-grouped',
        name: 'Mode (Grouped Data)',
        formula: '$\\text{Mode} = L + \\dfrac{(f_1 - f_0)}{2f_1 - f_0 - f_2} \\cdot h$',
        example: {
          problem: 'Find mode for: (0-10,2), (10-20,8), (20-30,5), (30-40,3)',
          solution: 'Mode ≈ 13.3',
          steps: [
            'Modal class is 10-20 (highest frequency = 8)',
            '$L = 10$ (lower limit of modal class)',
            '$f_1 = 8$ (frequency of modal class)',
            '$f_0 = 2$ (frequency before modal class)',
            '$f_2 = 5$ (frequency after modal class)',
            '$h = 10$ (class width)',
            'Mode = $10 + \\frac{8-2}{2(8)-2-5} \\times 10 = 10 + \\frac{6}{9} \\times 10 ≈ 13.3$'
          ]
        }
      }
    ]
  },
  {
    id: 'measures-of-dispersion',
    title: 'Dispersion',
    description: 'Variance, standard deviation, and coefficient of variation',
    items: [
      {
        id: 'variance-simple',
        name: 'Variance (Simple Data)',
        formula: '$\\sigma^2 = \\dfrac{\\sum (x_i - \\bar{x})^2}{n}$',
        example: {
          problem: 'Find variance of: 2, 4, 6, 8, 10',
          solution: '$\\sigma^2 = 8$',
          steps: [
            'Calculate mean: $\\bar{x} = \\frac{2+4+6+8+10}{5} = 6$',
            'Calculate deviations: $(x_i - \\bar{x})$: -4, -2, 0, 2, 4',
            'Square the deviations: $(x_i - \\bar{x})^2$: 16, 4, 0, 4, 16',
            'Sum of squared deviations: $16 + 4 + 0 + 4 + 16 = 40$',
            'Variance: $\\sigma^2 = \\frac{40}{5} = 8$'
          ]
        }
      },
      {
        id: 'variance-grouped',
        name: 'Variance (Grouped Data)',
        formula: '$\\sigma^2 = \\dfrac{\\sum f_i (x_i - \\bar{x})^2}{\\sum f_i}$',
        example: {
          problem: 'Find variance for: (10,2), (20,3), (30,5) where (value, frequency)',
          solution: '$\\sigma^2 = 60$',
          steps: [
            'Calculate weighted mean: $\\bar{x} = \\frac{10(2)+20(3)+30(5)}{2+3+5} = \\frac{230}{10} = 23$',
            'Calculate $(x_i - \\bar{x})^2$: $(10-23)^2 = 169$, $(20-23)^2 = 9$, $(30-23)^2 = 49$',
            'Calculate $f_i(x_i - \\bar{x})^2$: $2(169) = 338$, $3(9) = 27$, $5(49) = 245$',
            'Sum: $338 + 27 + 245 = 610$',
            'Variance: $\\sigma^2 = \\frac{610}{10} = 61$'
          ]
        }
      },
      {
        id: 'standard-deviation',
        name: 'Standard Deviation',
        formula: '$\\sigma = \\sqrt{\\dfrac{\\sum (x_i - \\bar{x})^2}{n}}$',
        example: {
          problem: 'Find standard deviation of: 1, 3, 5, 7, 9',
          solution: '$\\sigma ≈ 2.83$',
          steps: [
            'Calculate mean: $\\bar{x} = \\frac{1+3+5+7+9}{5} = 5$',
            'Calculate $(x_i - \\bar{x})^2$: 16, 4, 0, 4, 16',
            'Sum of squared deviations: $16 + 4 + 0 + 4 + 16 = 40$',
            'Variance: $\\sigma^2 = \\frac{40}{5} = 8$',
            'Standard deviation: $\\sigma = \\sqrt{8} ≈ 2.83$'
          ]
        }
      },
      {
        id: 'coefficient-of-variation',
        name: 'Coefficient of Variation',
        formula: '$CV = \\dfrac{\\sigma}{\\bar{x}} \\times 100\\%$',
        example: {
          problem: 'Find CV if mean = 50 and standard deviation = 10',
          solution: 'CV = 20%',
          steps: [
            'Given: $\\bar{x} = 50$ and $\\sigma = 10$',
            'Apply the formula: $CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$',
            'Substitute: $CV = \\frac{10}{50} \\times 100\\%$',
            'Calculate: $CV = 0.2 \\times 100\\% = 20\\%$'
          ]
        }
      },
      {
        id: 'range',
        name: 'Range',
        formula: 'Range = Maximum value - Minimum value',
        example: {
          problem: 'Find the range of: 12, 8, 15, 3, 20, 7',
          solution: 'Range = 17',
          steps: [
            'Arrange the data: 3, 7, 8, 12, 15, 20',
            'Identify maximum value: 20',
            'Identify minimum value: 3',
            'Calculate range: $20 - 3 = 17$'
          ]
        }
      },
      {
        id: 'quartiles',
        name: 'Quartiles',
        formula: '$Q_1 = \\frac{n+1}{4}$th term, $Q_3 = \\frac{3(n+1)}{4}$th term',
        example: {
          problem: 'Find Q1 and Q3 for: 2, 4, 6, 8, 10, 12, 14, 16',
          solution: '$Q_1 = 5$, $Q_3 = 13$',
          steps: [
            'Data is already arranged: 2, 4, 6, 8, 10, 12, 14, 16',
            'Number of values: $n = 8$',
            'Position of $Q_1$: $\\frac{8+1}{4} = 2.25$ → between 2nd and 3rd values',
            '$Q_1 = 4 + 0.25(6-4) = 4 + 0.5 = 4.5$',
            'Position of $Q_3$: $\\frac{3(8+1)}{4} = 6.75$ → between 6th and 7th values',
            '$Q_3 = 12 + 0.75(14-12) = 12 + 1.5 = 13.5$'
          ]
        }
      },
      {
        id: 'interquartile-range',
        name: 'Interquartile Range (IQR)',
        formula: '$IQR = Q_3 - Q_1$',
        example: {
          problem: 'Find IQR if $Q_1 = 15$ and $Q_3 = 35$',
          solution: 'IQR = 20',
          steps: [
            'Given: $Q_1 = 15$ and $Q_3 = 35$',
            'Apply the formula: $IQR = Q_3 - Q_1$',
            'Substitute: $IQR = 35 - 15$',
            'Calculate: $IQR = 20$'
          ]
        }
      }
    ]
  },
  {
    id: 'probability',
    title: 'Probability',
    description: 'Basic probability concepts and calculations',
    items: [
      {
        id: 'basic-probability',
        name: 'Basic Probability',
        formula: '$P(A) = \\dfrac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$',
        example: {
          problem: 'Find the probability of getting a head when flipping a fair coin',
          solution: '$P(H) = \\frac{1}{2}$',
          steps: [
            'Total possible outcomes when flipping a coin: 2 (Head, Tail)',
            'Favorable outcomes for getting a head: 1 (Head)',
            'Apply the formula: $P(H) = \\frac{1}{2}$',
            'Therefore, the probability is $\\frac{1}{2}$ or 0.5 or 50%'
          ]
        }
      },
      {
        id: 'addition-rule',
        name: 'Addition Rule',
        formula: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        example: {
          problem: 'If P(A) = 0.3, P(B) = 0.4, and P(A∩B) = 0.1, find P(A∪B)',
          solution: '$P(A \\cup B) = 0.6$',
          steps: [
            'Given: $P(A) = 0.3$, $P(B) = 0.4$, $P(A \\cap B) = 0.1$',
            'Apply the addition rule: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
            'Substitute: $P(A \\cup B) = 0.3 + 0.4 - 0.1$',
            'Calculate: $P(A \\cup B) = 0.6$'
          ]
        }
      },
      {
        id: 'multiplication-rule',
        name: 'Multiplication Rule (Independent Events)',
        formula: '$P(A \\cap B) = P(A) \\times P(B)$',
        example: {
          problem: 'Find probability of getting two heads in two coin flips',
          solution: '$P(HH) = \\frac{1}{4}$',
          steps: [
            'For independent events: $P(A \\cap B) = P(A) \\times P(B)$',
            'Probability of head on first flip: $P(H_1) = \\frac{1}{2}$',
            'Probability of head on second flip: $P(H_2) = \\frac{1}{2}$',
            'Probability of both heads: $P(HH) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$'
          ]
        }
      },
      {
        id: 'conditional-probability',
        name: 'Conditional Probability',
        formula: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$',
        example: {
          problem: 'If P(A∩B) = 0.2 and P(B) = 0.5, find P(A|B)',
          solution: '$P(A|B) = 0.4$',
          steps: [
            'Given: $P(A \\cap B) = 0.2$ and $P(B) = 0.5$',
            'Apply the conditional probability formula: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$',
            'Substitute: $P(A|B) = \\frac{0.2}{0.5}$',
            'Calculate: $P(A|B) = 0.4$'
          ]
        }
      },
      {
        id: 'complement-rule',
        name: 'Complement Rule',
        formula: '$P(A\') = 1 - P(A)$',
        example: {
          problem: 'If the probability of rain is 0.3, find the probability of no rain',
          solution: '$P(\\text{no rain}) = 0.7$',
          steps: [
            'Given: $P(\\text{rain}) = 0.3$',
            'Let $A$ = event of rain, then $A\'$ = event of no rain',
            'Apply the complement rule: $P(A\') = 1 - P(A)$',
            'Substitute: $P(\\text{no rain}) = 1 - 0.3 = 0.7$'
          ]
        }
      }
    ]
  },
  {
    id: 'distributions',
    title: 'Distributions',
    description: 'Common probability distributions and their properties',
    items: [
      {
        id: 'binomial-distribution',
        name: 'Binomial Distribution',
        formula: '$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$',
        example: {
          problem: 'Find P(X=2) for a binomial distribution with n=5 and p=0.3',
          solution: '$P(X=2) ≈ 0.309$',
          steps: [
            'Given: $n = 5$, $k = 2$, $p = 0.3$',
            'Apply the formula: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$',
            'Calculate $\\binom{5}{2} = \\frac{5!}{2!(5-2)!} = \\frac{5!}{2!3!} = 10$',
            'Substitute: $P(X=2) = 10 \\times (0.3)^2 \\times (0.7)^3$',
            'Calculate: $P(X=2) = 10 \\times 0.09 \\times 0.343 ≈ 0.309$'
          ]
        }
      },
      {
        id: 'normal-distribution',
        name: 'Normal Distribution (Standard)',
        formula: '$Z = \\dfrac{X - \\mu}{\\sigma}$',
        example: {
          problem: 'If X~N(50,10), find the z-score for X=65',
          solution: '$Z = 1.5$',
          steps: [
            'Given: $\\mu = 50$, $\\sigma = 10$, $X = 65$',
            'Apply the standardization formula: $Z = \\frac{X - \\mu}{\\sigma}$',
            'Substitute: $Z = \\frac{65 - 50}{10}$',
            'Calculate: $Z = \\frac{15}{10} = 1.5$'
          ]
        }
      },
      {
        id: 'poisson-distribution',
        name: 'Poisson Distribution',
        formula: '$P(X = k) = \\dfrac{e^{-\\lambda} \\lambda^k}{k!}$',
        example: {
          problem: 'Find P(X=3) for a Poisson distribution with λ=2',
          solution: '$P(X=3) ≈ 0.180$',
          steps: [
            'Given: $\\lambda = 2$, $k = 3$',
            'Apply the formula: $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$',
            'Substitute: $P(X=3) = \\frac{e^{-2} \\times 2^3}{3!}$',
            'Calculate: $P(X=3) = \\frac{e^{-2} \\times 8}{6} ≈ \\frac{0.135 \\times 8}{6} ≈ 0.180$'
          ]
        }
      }
    ]
  }
];
