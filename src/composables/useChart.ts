import { themeColors } from 'src/theme/colors.theme'
import { dateLocaleToString } from 'src/utils/date/dateUtils.util'
import { useLocalStorage } from './useLocalStorage'
import { storageKeys } from 'src/enums/storage/storage.enum'
import { ThemeColors } from 'src/theme/enums/colors.enum'
import { merge } from 'src/utils/merge/mergeUtils.util'
import { greyScale } from 'src/theme/greyScale.theme'
import { ApexOptions } from 'apexcharts'
import { presetsColors } from 'src/theme/presetsColors.theme'

export function useChart(options: any) {
  const { getLocalStorage } = useLocalStorage()

  const theme =
    themeColors[getLocalStorage<ThemeColors>(storageKeys.themeColors)]

  const LABEL_TOTAL = {
    show: true,
    label: 'Total',
    // color: theme.palette.text.secondary,
    // fontSize: theme.typography.subtitle2.fontSize,
    // fontWeight: theme.typography.subtitle2.fontWeight,
    // lineHeight: theme.typography.subtitle2.lineHeight,
  }

  const LABEL_VALUE = {
    // offsetY: 8,
    // color: theme.palette.text.primary,
    // fontSize: theme.typography.h3.fontSize,
    // fontWeight: theme.typography.h3.fontWeight,
    // lineHeight: theme.typography.h3.lineHeight,
  }

  const baseOptions: ApexOptions = {
    // Colors
    colors: [
      theme.primary.main,
      theme.secondary.main,
      presetsColors['info'].main,
      presetsColors['negative'].main,
      presetsColors['positive'].main,
      presetsColors['warning'].main,
    ],

    // Chart
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      background: 'transparent',
      toolbar: {
        tools: {
          download: false
        }
      }
      // theme: false,
      // foreColor: theme.palette.text.disabled,
      // fontFamily: theme.typography.fontFamily,
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      // type: 'gradient',
      gradient: {
        // type: 'vertical',
        // shadeIntensity: 0,
        // opacityFrom: 0.4,
        // opacityTo: 0,
        // stops: [0, 100],
        // enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },

    // Datalabels
    dataLabels: {
      enabled: false,
    },

    // Stroke
    stroke: {
      //width: 3,
      curve: 'smooth',
      lineCap: 'round',
      // colors: ['red']

    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: greyScale['G700'].main,
      xaxis: {
        lines: {
          show: false,
        },
      },
      show: true,
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Tooltip
    tooltip: {
      theme: undefined,
      x: {
        show: false,
      },
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      // fillSeriesCor: false,
      marker: {
        show: true,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },

    legend: {
      show: true,
      fontSize: '13px',
      // position: 'top',
      // horizontalAlign: 'right',
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      labels: {
        // colors: theme.palette.text.primary,
      },
      offsetY: 20,
      itemMargin: {
        horizontal: 10,
        vertical: 15,
      },
      // theme: false,
    },

    theme: {
      mode: undefined,
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        // borderRadius: smUp ? 3 : 1,
        columnWidth: '28%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },

      // Pie + Donut
      pie: {
        donut: {
          labels: {
            // show: true,
            // value: LABEL_VALUE,
            // total: LABEL_TOTAL,
          },
          /* stroke: {
            //width: 3,
            curve: 'smooth',
            lineCap: 'round',
            colors: ['red']
          }, */
        },
      },

      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          // background: alpha(theme.palette.grey[500], 0.16),
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },

      // Radar
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          // strokeColors: theme.palette.divider,
          // connectorColors: theme.palette.divider,
        },
      },

      // polarArea
      polarArea: {
        rings: {
          // strokeColor: theme.palette.divider,
        },
        spokes: {
          // connectorColors: theme.palette.divider,
        },
      },
    },
  }

  return { chartOptions: merge(baseOptions, options) }
}
