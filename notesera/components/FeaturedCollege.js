import { View,Text, TouchableOpacity, ScrollView } from "react-native"
import { themeColors } from "../themes"
import YearCard from "./YearCard"

const FeaturedCollege =({title , description, collegeRelatedData })=>{
    return(<View>
        <View className="flex-row justify-between items-center px-4 ">
            <View className ="w-4/5" style={{width:"80%"}}>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">
                    {description}
                </Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            padding:15
        }} className="overflow-visible">
            {collegeRelatedData.Year.map((yeardata,index)=>{
                return(<YearCard year={yeardata.YearName} image={yeardata.YearImage} key={index} YearRelatedData={yeardata}/>)
                
            })}
        </ScrollView>
    </View>)
}
export default FeaturedCollege