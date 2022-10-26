import { Meta, StoryObj} from '@storybook/react';  
import {TextInput, TextInputRootProps, TextInputInputProps} from './TextInput'
import {Envelope} from 'phosphor-react';

export default {
    title:'Compoents/TextInput',
    component: TextInput.Root,
    args:{
        children: [
        
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,  
            <TextInput.Input placeholder="Type your e-mail address" />
        
        ],
    },
    argTypes: {
        children:{
            table:{
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>    

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: (
            <TextInput.Input placeholder="Type your e-mail address" />
        )
    }
}