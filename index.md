
<html>
<head><title>BTVN B1</title>


</head>
<body>
<p>Projected by truong1. Thanks for github to helping me</p>
<a href="https://facebook.com">Set new facebook account</a>
<h2>SET NEW ACCOUNT</h2>
<h4>Free and always free</h4>
 
<form name="reg" method="get" id="reg" onsubmit="return setaccount()">

	<input type="text" name="fname" placeholder="First and Middle name">
	
	<input type="text" name="lname" placeholder="Last name"><br><br>
	

	<input type="text" name="emailophone" placeholder="Phone number or email"><br><br>
	

	<input type="password" name="password" placeholder="New password"><br><br>
	

	Your birthday:<br><br>
	<select>
<option value="day">Day</option>
	<option value="1">1</option>
  	<option value="2">2</option>
  	<option value="3">3</option>
  	<option value="4">4</option>
  	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	<option value="19">19</option>
	<option value="20">20</option>
	<option value="21">21</option>
	<option value="22">22</option>
	<option value="23">23</option>
	<option value="24">24</option>
	<option value="25">25</option>
	<option value="26">26</option>
	<option value="27">27</option>
	<option value="28">28</option>
	<option value="29">29</option>
	<option value="30">30</option>
	<option value="31">31</option>
	</select>
	<select>
 <option value="month">Month</option>

	<option value="1">1</option>
  	<option value="2">2</option>
  	<option value="3">3</option>
  	<option value="4">4</option>
  	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	</select>
	<select>
<option value="year">Year</option>
	
<option value= "1958" >1958</option>
<option value= "1959" >1959</option>
<option value= "1960" >1960</option>
<option value= "1961" >1961</option>
<option value= "1962" >1962</option>
<option value= "1963" >1963</option>
<option value= "1964" >1964</option>
<option value= "1965" >1965</option>
<option value= "1966">1966</option>
<option value= "1967" >1967</option>
<option value= "1968" >1968</option>
<option value= "1969" >1969</option>
<option value= "1970" >1970</option>
<option value= "1971" >1971</option>
<option value= "1972" >1972</option>
<option value= "1973" >1973</option>
<option value= "1974" >1974</option>
<option value= "1975" >1975</option>
<option value= "1976" >1976</option>
<option value= "1977" >1977</option>
<option value= "1978" >1978</option>
<option value= "1979" >1979</option>
<option value= "1980" >1980</option>
<option value= "1981" >1981</option>
<option value= "1982" >1982</option>
<option value= "1983" >1983</option>
<option value= "1984" >1984</option>
<option value= "1985" >1985</option>
<option value= "1986" >1986</option>
<option value= "1987" >1987</option>
<option value= "1988" >1988</option>
<option value= "1989" >1989</option>
<option value= "1990" >1990</option>
<option value= "1991" >1991</option>
<option value= "1992" >1992</option>
<option value= "1993" >1993</option>
<option value= "1994" >1994</option>
<option value= "1995" >1995</option>
<option value= "1996" >1996</option>
<option value= "1997" >1997</option>
<option value= "1998" >1998</option>
<option value= "1999" >1999</option>
<option value= "2000" >2000</option>
<option value= "2001" >2001</option>
<option value= "2002" >2002</option>
<option value= "2003" >2003</option>
<option value= "2004" >2004</option>
<option value= "2005" >2005</option>
<option value= "2006" >2006</option>
<option value= "2007" >2007</option>
<option value= "2008" >2008</option>
<option value= "2009" >2009</option>
<option value= "2010" >2010</option>
<option value= "2011" >2011</option>
<option value= "2012" >2012</option>
<option value= "2013" >2013</option>
<option value= "2014" >2014</option>
<option value= "2015" >2015</option>
<option value= "2016" >2016</option>
<option value= "2017" >2017</option>
</select><br><br>

	<input type="radio" name="gender" value="male"> Male
	<input type="radio" name="gender" value="female"> Female<br>
	<button type="button" onclick="setaccount()">SET ACCOUNT</button>
	<script>
	function setaccount() {
	  var fname = document.forms["reg"]["fname"].value;
	var lname = document.forms["reg"]["lname"].value;
	var emailophone = document.forms["reg"]["emailophone"].value;
	var password = document.forms["reg"]["password"].value;
	var day = document.forms["reg"]["day"].value;
	var month = document.forms["reg"]["month"].value;
	var year = document.forms["reg"]["year"].value;
	var gender = document.forms["reg"]["gender"].value;
	var success = 1;
	if ( fname == "" ) {
	alert( " You must fill your first name " )
	success = 0
	}
	if ( lname == "" ) {
	alert( " You must fill your last name " )
	success = 0
	}
	if ( emailophone == "" ) {
	alert( " You must fill your email or your phone number " )
	success = 0
	}
	if ( password == "" ) {
	alert( " You must fill your password " )
	success = 0
	}
	if ( day == "" ) {
	alert( " You must choose your birthday " )
	success = 0
	}
	if ( month == "" ) {
	alert( " You must choose your birthday " )
	success = 0
	}
	if ( year == "" ) {
	alert( " You must choose your birthday " )
	success = 0
	}
	if (success == 0) {
	alert("You must fill in all required field")
	} else {
	alert("You set account successfully")
	}
	  }
	</script>
	
</form>
</body>
</html>

