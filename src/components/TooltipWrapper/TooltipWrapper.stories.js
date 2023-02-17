import React from 'react';
import TooltipWrapper from './TooltipWrapper';

export default {
  title: 'TooltipWrapper/TooltipWrapper',
  component: TooltipWrapper,
  argTypes: {
  },
};

const Template = (args) => {
    return (<>
        <TooltipWrapper {...args}>
			Test tooltip on this very text
		</TooltipWrapper>
		Test abcd
	</>)
};

export const Primary = Template.bind({});
Primary.args = {
	tooltip: 'Test tooltip'
};

export const Secondary = Template.bind({});
Secondary.args = {
};