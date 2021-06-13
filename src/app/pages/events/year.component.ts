import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {Store} from '@ngrx/store';
import {IState} from './store/event.reducer';

@Component({
  selector: 'ngx-echarts-year-component',
  template: `
    <div #yearcomp echarts [options]="options" [merge]="merge" class="echart" style="height: 500pt;"></div>
  `,
})
export class YearComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  merge: any = {};

  @ViewChild('yearcomp') yearcomp;

  constructor(private theme: NbThemeService, private store: Store<IState>) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['year1', 'year2'],
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: 50,
          right: 100,
          top: 10,
          // bottom: 100,
        },
        xAxis: [],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [],
      };
    });

    this.store.subscribe(state => {
      try {
        const event = state['ct'].event;
        const years = Array.from(event.keys()).sort();
        const options = {
          legend: {
            data: years.map(v => v.toString()),
          },
          xAxis: [],
          series: [],
          dataZoom: [],
        };
        options.dataZoom.push({
          type: 'inside',
          show: true,
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0],
        });
        options.xAxis.push({
          type: 'category',
          axisTick: {
            alignWithLabel: true,
            interval: 0,
          },
          axisLine: {
            onZero: false,
            lineStyle: {},
          },
          axisPointer: {
            label: {
              formatter: params => {
                return (
                  params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              },
            },
          },
          data: event.get(years[0]).map(v => [v['day_of_week'], v['month']].join(' ')),
        });
        years.forEach((y, i) => {
          // options.xAxis.push({
          //   data: event.get(years[0]).map(v => [v['day_of_week'], v['month']].join(' ')),
          // });
          options.series.push({
            name: y.toString(),
            type: 'line',
            xAxisIndex: 0,
            smooth: true,
            data: event.get(y).map(v => v['count']),
          });
          return y;
        });

        this.merge = options;

        // const data = [];
        // options.legend.data = years.map(v => v.toString());
        // options.legend.xAxis.concat(state['ct'].event.keys().map);
        // //state['ct'].event;
        // console.log(years);
        // // const xs1 = year1.map(v => new Date(v['date']).toISOString().split('T')[0]);
        // // const xs2 = year2.map(v => new Date(v['date']).toISOString().split('T')[0]);
        //
        // const xs1 = data.map(v => [v['day_of_week'], v['month']].join(' '));
        // this.merge = {
        //   legend: {
        //     data: years,
        //   },
        //   xAxis: [
        //     {
        //       data: xs1,
        //     },
        //   ],
        //   series: [
        //     {
        //       name: years[0],
        //       data: data.map(v => v['count']),
        //     },
        //   ],
        // };
      } catch (e) {
      }
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
