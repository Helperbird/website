console.log('New website.....');

// css
import '../css/styles.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'notyf/notyf.min.css'; // for React and Vue

import * as Youtube from './core/youtube';
import * as reviewSlider from './core/slider';
import * as thirdParty from './core/third-party';

// Vue components
import * as navigation from './core/navigation';
import * as pricing_table from './core/extension-pricing';
import * as widget_table from './core/widget-pricing';
import * as a11y_table from './core/a11y-pricing';

reviewSlider.start();
Youtube.load();

// Vue components load
navigation.load();
widget_table.load();
pricing_table.load();
a11y_table.load();


thirdParty.crisp();
thirdParty.tagManager();
thirdParty.loadManager();
