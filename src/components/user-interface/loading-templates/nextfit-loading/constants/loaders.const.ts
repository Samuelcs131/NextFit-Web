import { LoaderSpinners } from '../enums/LoaderSpinners.enum'
import GradientSpinner from '../components/GradientSpinner.vue'
import SquaresSpinner from '../components/SquaresSpinner.vue'
import FlatSpinner from '../components/FlatSpinner.vue'

export const loaderSpinners = {
  [LoaderSpinners.GradientSpinner]: GradientSpinner,
  [LoaderSpinners.SquaresSpinner]: SquaresSpinner,
  [LoaderSpinners.FlatSpinner]: FlatSpinner,
}
