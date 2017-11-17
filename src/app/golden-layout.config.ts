import { GoldenLayoutConfiguration } from '../golden_layout';
import { SystemsListComponent } from './systems-list/systems-list.component';

export const goldenLayoutConfig: GoldenLayoutConfiguration = {
    components: [
        {
            component: SystemsListComponent,
            componentName: 'app-systems-list'
        }
    ],
    defaultLayout: {
        content: [{
            type: 'row',
            content: [{
                type: 'component',
                title: 'A',
                componentName: 'app-systems-list',
                componentState: { label: 'A' }
            }, {
                type: 'stack',
                content: [{
                    type: 'component',
                    title: 'B',
                    componentName: 'app-systems-list',
                    componentState: { label: 'B' }
                }, {
                    type: 'component',
                    title: 'C',
                    componentName: 'app-systems-list',
                    componentState: { label: 'C' }
                }]
            }]
        }]
    }
};
