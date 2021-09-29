package com.example.rest_web_services.todo;

import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.reactive.config.CorsRegistry;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
        protected void configure(org.springframework.security.config.annotation.web.builders.HttpSecurity http) throws java.lang.Exception {

            // http
            //    // .csrf().disable();
            //      .authorizeRequests()
                // .antMatchers(HttpMethod.GET,"/**").permitAll()
                // .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                // .antMatchers(HttpMethod.POST,"/**").permitAll()
                // .antMatchers(HttpMethod.PUT,"/**").permitAll()
                // .antMatchers(HttpMethod.DELETE,"/**").permitAll()
            //         .anyRequest().authenticated()
            //         .and()
                 
                
            // // .authenticated()
            // // .and()
            // // .httpBasic();

            //     // .antMatchers(HttpMethod.GET"/**").permitAll()
               

            http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"/**").permitAll()
                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .antMatchers(HttpMethod.POST,"/**").permitAll()
                .antMatchers(HttpMethod.PUT,"/**").permitAll()
                .antMatchers(HttpMethod.DELETE,"/**").permitAll()
                         .anyRequest().authenticated();
                        //  .and()
                        //  .httpBasic();
                    

        }

}

// // @Override
// // protected void registerAuthentication(AuthenticationManagerBuilder
// authManagerBuilder) throws Exception {
// // authManagerBuilder
// // .inMemoryAuthentication()
// // .withUser("user").password("password").roles("ADMIN");
// // }

// @Override
// public void addCorsMappings(CorsRegistry registry) {
// registry.addMapping("/**").allowedMethods("*");
// }