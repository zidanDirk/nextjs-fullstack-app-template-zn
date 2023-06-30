import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTransition, { IPageTransition } from './PageTransition';
import { mockIPageTransitionProps } from './PageTransition.mocks';

export default {
    title: 'layouts/PrimaryLayout',
    component: PageTransition,
    argTypes: {},
} as ComponentMeta<typeof PageTransition>;
  
const Template: ComponentStory<typeof PageTransition> = (args) => (
    <PageTransition {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockIPageTransitionProps.base,
} as IPageTransition;
  