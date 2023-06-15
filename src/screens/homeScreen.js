import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {videoData} from "../constant/utils";
import VideoList from "../components/videoList";
import {homeStyle} from "./homeStyle";

const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView  style={homeStyle.container}>
            <ScrollView>
                <Text style={homeStyle.heading}>Videos</Text>
                <View style={homeStyle.line}/>
                {videoData.map((res, index) => {
                    return (
                        <VideoList res={res} key={index} navigation={navigation}/>
                    )
                })}
            </ScrollView>

        </SafeAreaView>
    )
}
export default HomeScreen;
