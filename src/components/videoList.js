import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import rightArrow from '../assets/rightArrow.png'
import {videoListStyles} from "./videoListStyles";
import VideoDetails from "../screens/videoDetails";


const VideoList = ({navigation, res}) => {
    return (
        <SafeAreaView style={videoListStyles.mainSection}>
            <TouchableOpacity style={videoListStyles.videoList}
                              onPress={() => navigation.navigate('VideoDetails', {data: res})}>
                <Image style={videoListStyles.thumbnail} source={{uri: res?.thumbnailUrl}}/>
                <Text style={videoListStyles.title}>{res?.title}</Text>
                <Image source={rightArrow} style={{width: 18, height: 10}}/>
            </TouchableOpacity>
            <View style={videoListStyles.line}/>
        </SafeAreaView>
    )

}
export default VideoList
