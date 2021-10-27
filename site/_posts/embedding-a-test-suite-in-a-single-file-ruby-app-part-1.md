---
blurb: Make sure your one-off scripts work before executing them for real.
category: Ruby
date: '2016-05-22'
slug: /embedding-a-test-suite-in-a-single-file-ruby-app-part-1
tags:
- Dev
title: Embedding a Test Suite in a Single-file Ruby App (Part 1)
type: post
---


_"You only write code because you expect it to get executed. If you expect it to get executed, you ought to know that it works. The only way to know this is to test it."_

_-- Robert "Uncle Bob" Martin<sup>1</sup>_

---


Test Driven Development<sup>2</sup> has become the foundation of my coding practice. Knowing that, under it all, I can have math<sup>3</sup> actively and automatically proving my code works<sup>4</sup> has become so fundamental that I'm reluctant to do anything without it. That reluctance extends all the way to simple, single-file apps<sup>5</sup>.

Testing generally involves splitting code into two files:

1. Code that performs a task
2. Code to test the Code that performs a task

Most projects contain lots of files with application and testing code, documentation, supporting assets, etc... Separating testing concerns into multiple, separate files not only works, it's desirable. Unfortunately, it's completely at odds when the goal is a self-contained, single-file tool. I've been struggling with this a lot. Regularly falling back to manually testing<sup>7</sup> instead of creating automated ones that would lead to a second file.

After some experimentation, I'm happy to present a nice solution for packing a test suite directly into the same file as the main application code. 

The key: _Don't worry about separating test execution from actual execution. Just run the test suite every time the app is started._

Here's an example [filename: drink-example.rb]:

```ruby{numberLines: true}
#!/usr/bin/env ruby

require 'minitest'
require 'minitest/rg'


class Drink                                    # The Code to Test
  attr_reader :type
  
  def initialize
    @type = "water"
  end
  
  def describe_type
    puts "This is a drink of #{type}."
  end
end


class DrinkTest < MiniTest::Test               # The Test Suite
  def test_that_the_drink_is_water
    drink = Drink.new
    assert_equal "water", drink.type
  end
end


if MiniTest.run                                # The Run/Kill Switch
  puts "Tests Passed! Process can proceed."
  drink = Drink.new
  drink.describe_type
else
  puts "Tests Failed! Drink *is not* safe!"
  puts "-- No process run --"
end
```


The `Drink` and `DrinkTest` classes are standard Ruby and MiniTest<sup>8</sup> fare. The `MiniTest.run` conditional at the end provides the magic. Running the file with `ruby drink-example.rb` kicks off MiniTest from there. If all the tests pass, the app gets on with its actual business. 

Here's what that looks like:

<div class="highlight"><pre><code class="language-ruby" data-lang="ruby"><span class="vi">$ ruby drink-example.rb</span>
Run options: --seed 39971

# Running:

<span class="kp">.</span>

Finished in 0.000739s, 1352.7535 runs/s, 1352.7535 assertions/s.

<span class="kp">1 runs, 1 assertions, 0 failures, 0 errors, 0 skips</span>

Tests Passed! Process can proceed.
This is a drink of water.
</code></pre></div>

If MiniTest finds a problem it returns `false`.  This triggers the `else` block which contains only an error message. The app shuts down gracefully without attempting to do potentially dangers operations in its unstable state.

For example, changing `@type = "water"` to `@type = "poison"` in the `Drink` class produces:

<div class="highlight"><pre><code class="language-ruby" data-lang="ruby"><span class="vi">$ ruby drink-example.rb</span>
Run options: --seed 44252

# Running:

<span class="s1">F</span>

Finished in 0.001335s, 749.1551 runs/s, 749.1551 assertions/s.

  1) Failure:
DrinkTest#test_that_the_drink_is_water [drink-example.rb:16]:
Expected: "water"
  Actual: "poison"

<span class="s1">1 runs, 1 assertions, 1 failures, 0 errors, 0 skips</span>

Tests Failed! Drink *is not* safe!
-- No process run --
</code></pre></div>

So, not only does this approach keep everything in one file, it also does a TDD sanity check before each and every run.

I love everything about that.


---


<div style="text-align: right;"><em>I'll show more detailed examples of how I use this approach in Part 2.</em></div>

---



__Footnotes__


1. From _[Clean Code: A Handbook of Agile Software Craftsmanship](http://www.amazon.com/gp/product/0132350882)_ by Robert C. Martin. A book that'll rank high when I make my list of recommended reads for other coders.

2. [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) still feels like a quantum leap in my ability to make things. I recently finished a mad-dash migration project using languages and systems I wasn't really familiar with. While it's some of the least efficient code I've ever written, it has three things going for it. First, we launched on time. Second, everything worked. Neither would have been possible without the test suite I built as my first step and used throughout the migration. And third (saving the best for last), with the test suite as my backstop, I'm now removing all the cruft carried over from the migration while being confident the system still works as expected.

3. That's right, math. Because it's all ones and zeros inside the machine and every test case boils down to a "1" if everything worked as expected and a "0" if it didn't. 

4. Critical point: "works" in this context means only that the code is responding in a way the test case expects. There are a host of reasons (like testing the wrong thing) that it may not be doing what's actually desired even if all the tests pass. 

5. After building web pages, writing small, self-contained Perl scripts is how I got started coding. While it's been a couple decades and I've moved on to Ruby, the power of small, custom tools that fit in a single file still amazes me. At any given time, I've got 50 or more floating around<sup>6</sup> that get varying degrees of use. Some only last an hour. Some have been around for years. 

6. I use [Code Runner](https://coderunnerapp.com/) to house these apps. Makes it super easy to jump to and run any one of them in the blink of an eye. (It bugs out from time to time. Though, not enough to warrant looking for a replacement.)

7. Testing by hand was all I used to know. Trying to imagine going back to that makes me wonder how I got anything done. While I have no real complaints about my coding journey so far, learning how to build automated tests from the start is one thing I'd absolutely change if I could go back in time.

8. The initial tutorials I went through to learn Ruby used [RSpec](http://rspec.info/) for testing. While I can see some of the appeal, I was happy when I found [MiniTest](http://ruby-doc.org/stdlib-2.0.0/libdoc/MiniTest/rdoc/MiniTest.html). It makes more sense to my brain and has less overhead since it doesn't require learning a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language) (which slowed my overall learning progress considerably).