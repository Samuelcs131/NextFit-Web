import { themeColors } from 'src/theme/colors.theme'
import { dateLocaleToString } from 'src/utils/date/dateUtils.util'

export const activitiesOptionsChart = (
  exerciseName: string,
  categories: string[]
) => {
  return {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      background: 'transparent',
      theme: false,
    },
    xaxis: {
      categories,
      labels: {
        formatter: (value: string) => {
          return value
            ? dateLocaleToString(value, {
                dateStyle: 'short',
              })
            : '-'
        },
      },
    },
    yaxis: {
      title: {
        text: 'Valor',
      },
    },
    title: {
      text: exerciseName,
    },
    subtitle: {
      text: 'Análise de Repetições e Pesos',
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      offsetY: 20,
      itemMargin: {
        horizontal: 10,
        vertical: 15,
      },
      theme: false,
    },
    colors: [
      themeColors['rust'].primary.main,
      themeColors['rust'].secondary.main,
      themeColors['mauve'].primary.main,
      themeColors['mauve'].secondary.main,
    ],
    fill: {
      type: 'gradient',
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    grid: {
      show: false,
    },
    theme: {
      mode: false,
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      fillSeriesCor: false,
      theme: false,
      marker: {
        show: true,
      },
      x: {
        show: false,
        format: 'dd MMM',
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
  }
}
