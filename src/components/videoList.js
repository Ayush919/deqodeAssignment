import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import rightArrow from '../assets/rightArrow.png'
import {videoListStyles} from "./videoListStyles";


const VideoList = (item) => {

    return (
        <SafeAreaView style={videoListStyles.mainSection}>
            <TouchableOpacity style={videoListStyles.videoList}>
                <Image style={videoListStyles.thumbnail} source={{uri: item.res.thumbnailUrl}}/>
                <Text style={videoListStyles.title}>{item.res.title}</Text>
                <Image source={rightArrow} style={{width: 18, height: 10}}/>
            </TouchableOpacity>
            <View style={videoListStyles.line}/>
        </SafeAreaView>
    )

}
export default VideoList
