---
blurb: An excellent refactoring guideline from Sandi Metz and Katrina Owen.
category: Miscellaneous
date: '2014-11-14'
slug: /stay-one-undo-away-from-green
tags:
- Ruby
title: Stay One Undo Away from Green
type: post
---


*NOTE: This code has been disabled to work with MDX. TODO: Update this to work with MDX*

```html
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<script>
$(function() {
  $( "#tabs-b" ).tabs({active: 0});
  $( "#tabs" ).tabs({active: 0});
});
</script>

<style>
.tabcode { white-space: pre-wrap; color:#888; padding-left:10px; background-color: #efefef; font-family: monospace; height: 37em; border: 1px solid #ccc;}
.highlight { color:#000; font-weight:bold;}
.code_addition { color:green; font-weight:bold;}
.code_deletion { color:red; text-decoration: line-through;}
#tabs h4, #tabs-b h4 {height: 2.2em; }
</style>
```

I recently had the good fortune of attending [Practical Object-Oriented Design](http://www.sandimetz.com/courses/) with [Sandi Metz](https://twitter.com/sandimetz) and [Katrina Owen](https://twitter.com/kytrinyx). It was fantastic. Three days with them did more to improve my object-oriented thinking than months of reading and experimentation. I can't recommended the course highly enough.

Sandi and Katrina provided an elegant refactoring guideline on the first day:

    Stay one undo away from green.

It was a key take-away and it's as simple as it sounds. Make one small change at a time during refactoring. If the tests go red, hit undo and immediately get back to green. If you're like me, and easily venture a dozen or more changes away from a passing test suite, this approach is transformative.

To illustrate, they walked the class through their refined, systematic process for extracting a conditional into a method. Two examples of their approach are below. The first lays out the steps used when starting with an 'else' branch. The second starts with an explicit case. The number of steps may appear tedious but each change is tiny. The entire process goes very quickly. As we discovered in class, picking a good name for the method takes longer than typing the code. 

---


**Extracting a conditional starting with the 'else' branch**

```html
<div id="tabs">
  <ul>
    <li><a href="#tabs-0">0</a></li>
    <li><a href="#tabs-1">1</a></li>
    <li><a href="#tabs-2">2</a></li>
    <li><a href="#tabs-3">3</a></li>
    <li><a href="#tabs-4">4</a></li>
    <li><a href="#tabs-5">5</a></li>
    <li><a href="#tabs-6">6</a></li>
    <li><a href="#tabs-7">7</a></li>
    <li><a href="#tabs-8">8</a></li>
    <li><a href="#tabs-9">9</a></li>
    <li><a href="#tabs-10">10</a></li>
    <li><a href="#tabs-11">11</a></li>
    <li><a href="#tabs-12">12</a></li>
  </ul>

  <div id="tabs-0">
    <h4>Step 0 - Initial Code<br /><br /></h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end
    
  end

end
  </p>
  </div>


  <div id="tabs-1">
    <h4>Step 1 - Identify the things that are most alike.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      <span class="highlight">"#{number} bottle of beer on the wall..."</span>
    else
      <span class="highlight">"#{number} bottles of beer on the wall..."</span>
    end
    
  end

end
  </p>
  </div>


  <div id="tabs-2">
    <h4>Step 2 - Identify the smallest difference in the things that are most alike.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} <span class="highlight">bottle</span> of beer on the wall..."
    else
      "#{number} <span class="highlight">bottles</span> of beer on the wall..."</span>
    end
    
  end

end
  </p>
  </div>


  <div id="tabs-3">
    <h4>Step 3 - Make a method to return the value needed by the 'else' case but don't actually call it. Just make sure it parses.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end
    
  end

  <span class="code_addition">def container
    "bottles"
  end</span>

end
    </p>
  </div>

  <div id="tabs-4">
    <h4>Step 4 - Execute the method without actually using the value.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    <span class="code_addition">container</span>
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end
    
  end

  def container
    "bottles"
  end

end
    
    </p>
  </div>

  <div id="tabs-5">
    <h4>Step 5 - Used the new method in the 'else' case. </h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    # <span class="code_deletion">container</span>
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} <span class="code_addition">#{container}</span> of beer on the wall..." # Replaced 'bottles'
    end
    
  end

  def container
    "bottles"
  end
  
end
    
    </p>
  </div>

  <div id="tabs-6">
    <h4>Step 6 - Shim on an argument and run the tests to make sure it still passes.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} #{container} of beer on the wall..."
    end
    
  end

  def container(bottle_count<span class="code_addition">=:FIXME</span>)
    "bottles"
  end
  
end
    
    </p>
  </div>

  <div id="tabs-7">
    <h4>Step 7 - Send an argument to the method even though it's not used.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} #{container<span class="code_addition">(number)</span>} of beer on the wall..."
    end
    
  end

  def container(bottle_count=:FIXME)
    "bottles"
  end
  
end    
    </p>
  </div>

  <div id="tabs-8">
    <h4>Step 8 - Remove the default shim for the argument.</h4>
    <p class="tabcode">
class Bottles
  
  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} #{container(number)} of beer on the wall..."
    end
    
  end

  def container(bottle_count) # Removed <span class="code_deletion">=:FIXME</span>
    "bottles"
  end
  
end
    
    </p>
  </div>

  <div id="tabs-9">
    <h4>Step 9 - Update the method to have the new functionality without actually calling it in the new location.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} #{container(number)} of beer on the wall..."
    end
    
  end

  def container(bottle_count)
    <span class="code_addition">if bottle_count == 1
      "bottle"
    else</span>
      "bottles"
    <span class="code_addition">end</span>
  end
  
end
    </p>
  </div>

  <div id="tabs-10">
    <h4>Step 10 - Call the method in the new location. </h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} <span class="code_addition">#{container(number)}</span> of beer on the wall..." # Replaced 'bottle'
    else
      "#{number} #{container(number)} of beer on the wall..."
    end
    
  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end
  
end
    </p>
  </div>

  <div id="tabs-11">
    <h4>Step 11 - Comment out unused cases.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    <span class="code_addition">#</span> if number == 1
    <span class="code_addition">#</span>   "#{number} #{container(number)} of beer on the wall..."
    <span class="code_addition">#</span> else
    "#{number} #{container(number)} of beer on the wall..."
    <span class="code_addition">#</span> end
    
  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end
  
end    
    </p>
  </div>

  <div id="tabs-12">
    <h4>Step 12 - Remove comments and you're done.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    "#{number} #{container(number)} of beer on the wall..."
  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end
  
end    
    </p>
  </div>




</div>
```


---


**Extracting a conditional starting with a specific case**

```html

<div id="tabs-b">
  <ul>
    <li><a href="#tabs-b-0">0</a></li>
    <li><a href="#tabs-b-1">1</a></li>
    <li><a href="#tabs-b-2">2</a></li>
    <li><a href="#tabs-b-3">3</a></li>
    <li><a href="#tabs-b-4">4</a></li>
    <li><a href="#tabs-b-5">5</a></li>
    <li><a href="#tabs-b-6">6</a></li>
    <li><a href="#tabs-b-7">7</a></li>
    <li><a href="#tabs-b-8">8</a></li>
    <li><a href="#tabs-b-9">9</a></li>
  </ul>

  <div id="tabs-b-0">
    <h4>Step 0 - Initial Code<br /><br /></h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end
    
  end

end
  </p>
  </div>

  <div id="tabs-b-1">
    <h4>Step 1 - Identify the things that are most alike.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      <span class="highlight">"#{number} bottle of beer on the wall..."</span>
    else
      <span class="highlight">"#{number} bottles of beer on the wall..."</span>
    end
    
  end

end
  </p>
  </div>


  <div id="tabs-b-2">
    <h4>Step 2 - Identify the smallest difference in the things that are most alike.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} <span class="highlight">bottle</span> of beer on the wall..."
    else
      "#{number} <span class="highlight">bottles</span> of beer on the wall..."</span>
    end
    
  end

end
  </p>
  </div>


  <div id="tabs-b-3">
    <h4>Step 3 - Make a method that takes an unused argument and returns the value needed but don't actually call it. Just make sure it parses.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end
    
  end

  <span class="code_addition">def container(bottle_count)
    "bottle"
  end</span>

end
    </p>
  </div>

  <div id="tabs-b-4">
    <h4>Step 4 - Execute the method without actually using the value.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    <span class="code_addition">container(number)</span>
    if number == 1
      "#{number} bottle of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end

  end

  def container(bottle_count)
    "bottle"
  end  

end    
    </p>
  </div>

  <div id="tabs-b-5">
    <h4>Step 5 - Use the new method</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    # <span class="code_deletion">container(number)</span>
    if number == 1
      "#{number} <span class="code_addition">#{container(number)}</span> of beer on the wall..." # Replaced 'bottle'
    else
      "#{number} bottles of beer on the wall..."
    end

  end

  def container(bottle_count)
    "bottle"
  end  

end    
    </p>
  </div>

  <div id="tabs-b-6">
    <h4>Step 6 - Update the method to have the new functionality without actually calling it in the new location.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)

    if number == 1
      "#{number} #{container(number)} of beer on the wall..."
    else
      "#{number} bottles of beer on the wall..."
    end

  end

  def container(bottle_count)
    <span class="code_addition">if bottle_count == 1</span>
      "bottle"
    <span class="code_addition">else
      "bottles"
    end</span>
  end

end    
    </p>
  </div>

  <div id="tabs-b-7">
    <h4>Step 7 - Call the method in the 'else' case.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)

    if number == 1
      "#{number} #{container(number)} of beer on the wall..."
    else
      "#{number} <span class="code_addition">#{container(number)}</span> of beer on the wall..." # Replaced 'bottles'
    end

  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end

end    
    </p>
  </div>

  <div id="tabs-b-8">
    <h4>Step 8 - Comment out unused case.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)

    <span class="code_addition">#</span> if number == 1
      "#{number} #{container(number)} of beer on the wall..."
    <span class="code_addition">#</span> else
    <span class="code_addition">#</span>   "#{number} #{container(number)} of beer on the wall..."
    <span class="code_addition">#</span> end

  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end

end 
    </p>
  </div>

  <div id="tabs-b-9">
    <h4>Step 9 - Remove comments and you're done.</h4>
    <p class="tabcode">
class Bottles

  def verse_for(number)
    "#{number} #{container(number)} of beer on the wall..."
  end

  def container(bottle_count)
    if bottle_count == 1
      "bottle"
    else
      "bottles"
    end
  end

end    
    </p>
  </div>


</div>
```


Don't let the terse nature of the examples fool you. They are simplified versions of a 99 Bottles exercise used throughout the class. The full problem has a lot more going on and the actual extraction provides benefits that aren't evident in this demonstration. If you want to learn more, definitely attend the class. Sandi and Katrina also have a '99 Bottles Of OOP' book coming out soon. Based on the class, I expect it'll be great. [Sign up](http://signup.99bottlesbook.com) for info about it if you're interested.