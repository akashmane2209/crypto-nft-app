import { CoinHistory } from './../../../services/coins.service';
import {
	Component,
	Input,
	ViewChild,
	AfterViewInit,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
let formatter = Intl.NumberFormat('en', {
	style: 'currency',
	maximumFractionDigits: 2,
	currencyDisplay: 'narrowSymbol',
	currency: 'USD',
});
// @ts-ignore
const labelTooltip = (tooltipItem) => {
	return 'Value : ' + formatter.format(tooltipItem.raw);
};
const titleToolTip = () => {
	return '';
};
// @ts-ignore
const labelFooter = (tooltipItems) => {
	const date = new Date(tooltipItems[0].label);
	return `${date.toLocaleString('default', {
		month: 'short',
	})} ${date.getDate()}, ${date.getFullYear()}`;
};
interface ChartData {
	data: number[];
	labels: number[];
}
@Component({
	selector: 'app-crypto-chart',
	templateUrl: './crypto-chart.component.html',
	styleUrls: ['./crypto-chart.component.less'],
})
export class CryptoChartComponent implements OnChanges {
	@Input() chartData: number[] = [];
	@Input() chartLabels: number[] = [];

	constructor() {
	}

	public lineChartData: ChartConfiguration['data'] = {
		datasets: [
			{
				data: this.chartData,
				borderColor: 'rgba(186, 227, 153, 1)',
				pointBackgroundColor: 'rgba(186, 227, 153, 1)',
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverBorderColor: '#1E1E1E',
				pointHoverBorderWidth: 1,
				borderWidth: 1,
				backgroundColor: 'rgba(186, 227, 153, .3)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				fill: 'origin',
			},
		],
		labels: this.chartLabels,
	};

	public lineChartOptions: ChartConfiguration['options'] = {
		elements: {
			line: {
				tension: 0.1,
			},
		},
    maintainAspectRatio: false,
		scales: {
			x: {
				display: false,
			},
			// We use this empty structure as a placeholder for dynamic theming.
			y: {
				position: 'left',
				display: false,
				grid: {
					color: '#85868F',
				},
				ticks: {
					display: false, //this will remove only the label
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				padding: {
					x: 25,
					y: 10,
				},
				backgroundColor: '#3C3835',
				displayColors: false,
				xAlign: 'center',
				yAlign: 'bottom',
				bodyFont: {
					family: 'TTInterfaces',
					size: 14,
				},
				callbacks: {
					label: labelTooltip,
					title: titleToolTip,
					footer: labelFooter,
				},
				footerAlign: 'center',
				footerColor: '#C5C5C5',
				footerFont: {
					family: 'TTInterfaces',
					weight: 'semibold',
					size: 14,
				},
			},
		},
	};

	public lineChartType: ChartType = 'line';
	ngOnChanges(changes: SimpleChanges): void {
		this.lineChartData.datasets[0].data = this.chartData;
		this.lineChartData.labels = this.chartLabels;
		this.chart?.update();
	}
	@ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
