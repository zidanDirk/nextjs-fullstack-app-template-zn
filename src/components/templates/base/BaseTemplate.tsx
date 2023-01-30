import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
    sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
    sampleTextProp
}) => {
    return <div>{ sampleTextProp }</div>;
};
  
export default BaseTemplate;
