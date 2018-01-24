/**
 * Created by lpy on 2017/10/23.
 */
import Avatar from './components/avatar';
import Button from './components/button';
import Input from './components/input';
import Field from './components/field';
import Select from './components/select';
import Badge from './components/badge';
import Title from './components/title';
import Tooltip from './components/tooltip';
import Modal from './components/modal';
import Message from './components/message';
import Menu from './components/menu';
import Navbar from './components/navbar';
import {
  Checkbox,
  CheckboxGroup
} from './components/checkbox';
import {
  Card,
  CardList
} from './components/card';
import {
  Radio,
  RadioGroup
} from './components/radio';
import config, {
  setOptions
} from './utils/config';

const components = {
  Avatar,
  Button,
  Input,
  Card,
  CardList,
  Checkbox,
  CheckboxGroup,
  Field,
  Select,
  Badge,
  Title,
  Tooltip,
  Modal,
  Message,
  Menu,
  Radio,
  RadioGroup,
  Navbar
};

components.install = (Vue, options = {}) => {
  setOptions(Object.assign(config, options));

  for (const componentName in components) {
    const component = components[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }
};

export default components
