import {Component} from '@angular/core';
export const ADVISORS=[
{name:'Dr Ajayan',role:'Staff Advisor',department:'ENT Department',photo:'dr-ajayan',position:'50% 28%'},
{name:'Dr Baburaj',role:'Staff Advisor',department:'Anaesthesia Department',photo:'dr-baburaj',position:'50% 35%'},
{name:'Dr Janaki',role:'Staff Advisor',department:'Pediatrics Department',photo:'dr-janaki',position:'50% 40%'},
{name:'Dr Resmy',role:'Staff Advisor',department:'Obstetrics & Gynaecology Department',photo:'dr-resmy',position:'50% 35%'},
{name:'Dr Serin',role:'Staff Advisor',department:'Dermatology Department',photo:'dr-serin',position:'50% 30%'},
{name:'Dr Sreekumar',role:'Staff Advisor',department:'Surgery Department',photo:'dr-sreekumar',position:'50% 30%'}];
export const TEAM=[
{name:'Vishnunarayanan',role:'President',photo:'vishnunarayanan',position:'50% 30%'},
{name:'Shada Salam',role:'Secretary',photo:'shada-salam',position:'50% 39%'},
{name:'Sibhathulla',role:'L43 Batch Representative',photo:'sibhathulla',position:'45% 30%'},
{name:'Medha Sagar',role:'L43 Batch Representative',photo:'medha-sagar',position:'40% 30%'}];
@Component({selector:'app-people',standalone:true,template:`
<section class="people-section" id="advisors"><div class="section-heading"><div><div class="eyebrow">GUIDANCE THAT GROUNDS US</div><h2>Our staff advisors.</h2></div><p>Faculty guidance.<br>A shared commitment to care.</p></div><div class="advisor-grid">@for(person of advisors;track person.photo){<article class="person-card"><div class="portrait"><img [src]="'/people/'+person.photo+'.jpg'" [alt]="person.name" width="400" height="460" loading="lazy" [style.object-position]="person.position"></div><div class="person-info"><span class="person-role">{{person.role}}</span><h3>{{person.name}}</h3><p>{{person.department}}</p></div></article>}</div></section>
<section class="people-section" id="team"><div class="section-heading"><div><div class="eyebrow">THE PEOPLE WHO MAKE IT HAPPEN</div><h2>Our student team.</h2></div><p>Bringing people together.<br>Turning compassion into action.</p></div><div class="team-grid">@for(person of team;track person.photo){<article class="person-card"><div class="portrait"><img [src]="'/people/'+person.photo+'.jpg'" [alt]="person.name" width="400" height="460" loading="lazy" [style.object-position]="person.position"></div><div class="person-info"><span class="person-role">{{person.role}}</span><h3>{{person.name}}</h3></div></article>}</div></section>
`})export class People{advisors=ADVISORS;team=TEAM;}
