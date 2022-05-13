import styles from './Styles.module.css'

export default function Design() {
  return (
    <div>
      <pre className={styles.background}>
        <div className={styles.row}>
          <span className={`${styles.line_content} ${styles.first_line}`}>
            <span className="token keyword">function</span>
            <span className="token plain"> </span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token parameter">max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token punctuation">{'{'}</span>
            <span className="token plain"></span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token keyword">return</span>
            <span className="token plain"> Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">floor</span>
            <span className="token punctuation">(</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}>
            <span className="token plain">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="token punctuation">(</span>
            <span className="token plain">Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">random</span>
            <span className="token punctuation">(</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">*</span>
            <span className="token plain"> max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">+</span>
            <span className="token plain"> </span>
            <span className="token number">1</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token punctuation">)</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}>
            <span className="token plain"></span>
            <span className="token punctuation">{'}'}</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}></span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_content}>&nbsp;</span>
        </div>

        <div className={styles.row}>
          <span className={`${styles.line_content} ${styles.last_line}`}>
            <span className="token plain">console</span>
            <span className="token punctuation">.</span>
            <span className="token function">log</span>
            <span className="token punctuation">(</span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token number">100</span>
            <span className="token punctuation">)</span>
            <span className="token punctuation">)</span>
          </span>
        </div>

        <button className={styles.copy_button}>Copy</button>
      </pre>

      <div className="text-xs">&nbsp;</div>

      <pre className={styles.background}>
        <div className={styles.row}>
          <span className={`pt-3 ${styles.line_content}`}>{`// Output:`}</span>
        </div>

        <div className={styles.row}>
          <span className={`pb-3 ${styles.line_content}`}>

            {'// 27'}

          </span>
        </div>
      </pre>

      <ul className="mt-8">
        <li>No line numbers</li>
        <li>Output split out to it&apos;s own area</li>
      </ul>
    </div>
  )
}
