//code ios

gulp.task('MyCalendarScreen_ios', function(done){
  console.log('MyCalendarScreen')
  gulp.src(['draftbit/screens/MyCalendarScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from 'react-native';
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`const [date_start, setDate_start] = React.useState(undefined);`
                    ,
                     `const [date_start, setDate_start] = React.useState(Date.now());`))
    .pipe(replace(/<Container([\s\S]*)searchCoach([\s\S]*)\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={searchCoach}
        style={{ height: 30, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSearchCoach(itemValue)}
      >
     
        <Picker.Item label="Filter by" value="undefined" />
        {data && data['selectCoach'].map(prop => {
         return (
         <Picker.Item label={prop.coachName} value={prop.coachId} />
         );
      })}
      </Picker>`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('EditCoachScreen_ios', function(done){
  console.log('EditCoachScreen')
  gulp.src(['draftbit/screens/EditCoachScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import { Picker } from 'react-native';
import React from 'react';
import {lang} from '../config/config';                      
`)).pipe(replace(langMatch,replaceLang))

    .pipe(replace(/<Container([\s\S]*)setLocationAssign([\s\S]*)\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={locationAssign}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setLocationAssign(itemValue)}
      >
     
        <Picker.Item label="Select an option" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>`}))
    .pipe(gulp.dest('screens/'));
        done()

});


gulp.task('SelectaTimeScreen_ios', function(done){
  console.log('SelectaTimeScreen')
  gulp.src(['draftbit/screens/SelectaTimeScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from 'react-native';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`const [number_session, setNumber_session] = React.useState(undefined);`
 ,
                     `const [number_session, setNumber_session] = React.useState(1);`))
    .pipe(replace(`const [total_member, setTotal_member] = React.useState(undefined);`
 ,
                     `const [total_member, setTotal_member] = React.useState(1);`))
    .pipe(replace(/<Container([\s\S]*)sessionType([\s\S]*)\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={sessionType}
        style={{ height: 30, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSessionType(itemValue)}
      >
              <Picker.Item label="Choose" value="undefined" />

        <Picker.Item label="PT" value="PT" />
        <Picker.Item label="Stretching" value="Stretching" />
        <Picker.Item label="Kickfit" value="Kickfit" />

      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ListofSessionAdminScreen_ios', function(done){
  console.log('ListofSessionAdminScreen')
  gulp.src(['draftbit/screens/ListofSessionAdminScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from 'react-native';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_locationId}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_locationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_coachId}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_coachId(itemValue)}
      >
             
        <Picker.Item label="Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('InsightScreen_ios', function(done){
  console.log('InsightScreen')
  gulp.src(['draftbit/screens/InsightScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from 'react-native';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_locationId}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_locationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_coachId}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_coachId(itemValue)}
      >
             
        <Picker.Item label="Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('OrderCreateScreen_ios', function(done){
  console.log('OrderCreateScreen')
  gulp.src(['draftbit/screens/OrderCreateScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';    
import { Picker } from 'react-native';

`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})coachAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={coachAssign}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setCoachAssign(itemValue)}
      >ß
             
        <Picker.Item label="Select Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})clientAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={clientAssign}
        style={{ height: 220, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setClientAssign(itemValue)}
      >
             
        <Picker.Item label="Select Client" value="undefined" />
        { data['item'].map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.clientId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});