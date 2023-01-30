import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
    title: 'cards/CatCard',
    component: CatCard,
    argTypes: {},
} as ComponentMeta<typeof CatCard>;
  
const Template: ComponentStory<typeof CatCard> = (args) => (
    <CatCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockCatCardProps.base,
} as ICatCard;
  