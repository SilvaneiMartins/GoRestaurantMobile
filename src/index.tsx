/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* App GoRestaurantMobile;
*/
import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
    <View style={{ flex: 1 }}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <Routes />
    </View>
);

export default App;
