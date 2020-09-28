// import './index.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init();
})