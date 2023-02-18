import React from 'react';
import TooltipWrapper from './TooltipWrapper';

export default {
  title: 'TooltipWrapper/TooltipWrapper',
  component: TooltipWrapper,
  argTypes: {
  },
};

const Template = (args) => {
    return (<div style={{marginTop: '1000px', marginBottom: '1000px'}}>
        <TooltipWrapper {...args}>
			Test tooltip on this very text
		</TooltipWrapper>
		Test abcd
	</div>)
};

export const Primary = Template.bind({});
Primary.args = {
	tooltip: null,
	onShow: () => {console.log("On show")},
	onHide: () => {console.log("On hide")},
};

export const Secondary = Template.bind({});
Secondary.args = {
	tooltip: <span>Here is some <strong>JSX</strong></span>
};