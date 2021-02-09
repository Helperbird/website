console.log('New website.....');

// css
import '../css/styles.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'notyf/notyf.min.css'; // for React and Vue

import * as Youtube from './new/youtube';
import * as reviewSlider from './new/slider';

import * as navigation from './new/navigation';
import * as pricing_table from './new/extension-pricing';
import * as widget_table from './new/widget-pricing';
import * as a11y_table from './new/a11y-pricing';

reviewSlider.start();

navigation.load();

widget_table.load();
pricing_table.load();

a11y_table.load();
Youtube.load();
